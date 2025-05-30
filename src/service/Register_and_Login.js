import pool from "../config/database.js";
import CustomError from "../utils/CustomError.js";
import bcrypt from "bcrypt";
import tokenGenerate from "../utils/jwt.js";

class Register_and_Login {
    constructor() { }

    async register(body) {
        const findUser = await pool.query("SELECT * FROM users WHERE username = $1", [body.username]);

        if (findUser.rows.length > 0)
            throw new CustomError("User already exists", 403);

        if (body.password !== body.repeat_password) {
            throw new CustomError("Password mismatch", 400);
        }

        const hashpassword = await bcrypt.hash(body.password, 10);

        const result = await pool.query(`INSERT INTO users (username, branch_id, password, birth_date, gender, role)VALUES ($1, $2, $3, $4, $5, $6) RETURNING username, branch_id, birth_date, gender, role`,
            [body.username, body.branch_id, hashpassword, body.birth_date, body.gender, body.role || 'user']
        );

        const user = result.rows[0];
        const token = tokenGenerate(user);

        return {
            status: 201,
            success: true,
            data: user,
            token
        };
    }

    async login(body) {
        
        const findUser = await pool.query("SELECT * FROM users WHERE username = $1", [body.username]);

        if (findUser.rows.length === 0)
            throw new CustomError("User not found", 404);

        const user = findUser.rows[0];
        const isMatch = await bcrypt.compare(body.password, user.password);

        if (!isMatch)
            throw new CustomError("Username or password incorrect", 401);

        const { password, ...safeUser } = user;
        const token = tokenGenerate(safeUser);

        return {
            status: 200,
            success: true,
            data: safeUser,
            token
        };
    }
}

export default Register_and_Login;
