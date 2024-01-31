import { Request, Response } from "express";
import { questionModel } from "../models/question.model";

export const questionController = {
    findAll: async (res: Response) => {
        try {
            const { status, message, data } = await questionModel.findAll();
            if (status) {
                return res.status(200).json({
                    message,
                    data
                });
            } else {
                throw {
                    message: "error"
                };
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
                data: null
            })
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { status, message, data } = await questionModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Error!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    update: async (req: Request, res: Response) => {
        try {
            const questionId = parseInt(req.params.id)
            const { status, message, data } = await questionModel.update(questionId, req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Question not found!"
                }
            }
        } catch (err) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const questionId = parseInt(req.params.id)
            const { status, message, data } = await questionModel.delete(questionId);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Question not found!"
                }
            }
        } catch (err) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    }
}