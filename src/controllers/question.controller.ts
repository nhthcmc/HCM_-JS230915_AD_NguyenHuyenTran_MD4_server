import { Request, Response } from "express";
import { questionModel } from "../models/question.model";

export const questionController = {
    findAll: async (res: Response) => {
        try {
            const { status, data } = await questionModel.findAll();
            if (status) {
                return res.status(200).json({
                    message: "All questions",
                    data
                });
            }
            throw {
                message: "Error"
            };
        } catch (err: any) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
                data: null
            })
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            const { status, data } = await questionModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message: 'Created',
                    data
                })
            }
            throw {
                message: "Error"
            }
        } catch (err: any) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    findById: async (req: Request, res: Response) => {
        try {
            const { data, status } = await questionModel.findById(Number(req.params.id))
            if (status) {
                return res.status(201).json({
                    data,
                    message: 'Found'
                })
            }
            throw {
                message: "Error"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    findByIdWithAnswer: async (req: Request, res: Response) => {
        try {
            const { data, status } = await questionModel.findById(Number(req.params.id))
            if (status) {
                return res.status(201).json({
                    data,
                    message: "Found"
                })
            }
            throw {
                message: "Error"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },
    findWithConditon: async (req: Request, res: Response) => {
        try {
            const { data, status } = await questionModel.findWithCondition(Number(req.query.category), Number(req.query.level), Number(req.query.limit))
            if (status) {
                return res.status(201).json({
                    data,
                    message: "Found"
                })
            }
            throw {
                message: "Error"
            }
        } catch (err: any) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    }
}