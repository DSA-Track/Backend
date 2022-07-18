import { Response } from "express";

const sendSuccess = (code: number, message: string, payload: { [key: string]: any }, res: Response) => {
    return res.status(code).send({
        message, payload
    })
}

export default sendSuccess