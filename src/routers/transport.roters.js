import { Router } from "express";
import TransportController from "../controller/transports.controller.js";
import authencate from "../middleware/authMiddleware.js";
import validates from "../middleware/validate.middleware.js";
import transportSchema from "../validation/transport.validation.js";

const transportRouter = Router()
const controller = new TransportController()

transportRouter
        .get("/api/transport/branch/:branch_id", authencate(['super_admin', 'admin']), controller.getTransport.bind(controller))
        .get("/api/transport/model/:model", authencate(['super_admin', 'admin']), controller.getModel.bind(controller))
        .post("/api/add/transport", authencate(['super_admin', 'admin']), validates(transportSchema), controller.addTransport.bind(controller))
        .put("/api/change/transport/:id", authencate(['super_admin', 'admin']), validates(transportSchema), controller.changeTransport.bind(controller))
        .delete("/api/delete/transport/:id", authencate(['super_admin', 'admin']), controller.deleteTransport.bind(controller))

export default transportRouter