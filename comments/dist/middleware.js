"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowAPI = void 0;
const allowAPI = (req, res, next) => {
    // Permitir solicitudes desde localhost:13
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    // Permitir que se envíen cookies en la solicitud
    res.setHeader("Access-Control-Allow-Credentials", "true");
    // Permitir los métodos HTTP que se pueden usar
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    // Permitir los encabezados que se pueden incluir en la solicitud
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Si la solicitud es de tipo OPTIONS, responder con éxito
    if (req.method === "POST") {
        return res.sendStatus(200);
    }
    // Pasar al siguiente middleware
    next();
};
exports.allowAPI = allowAPI;
