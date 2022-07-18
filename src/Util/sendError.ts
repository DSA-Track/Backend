import { Response } from "express";

const sendError = (code: number, message: string, res: Response) => {
    return res.status(code).send({ message });
}

export default sendError