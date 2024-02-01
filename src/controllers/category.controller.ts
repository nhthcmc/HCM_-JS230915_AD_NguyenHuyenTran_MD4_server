import { Request, Response } from "express";
import { categoryModel } from "../models/category.model";

export const categoryController = {
    findAll: async (res: Response) => {
        try {
            const { status, data } = await categoryModel.findAll();
            if (status) {
                return res.status(200).json({
                    message: "Found all",
                    data
                });
            } else {
                throw {
                    message: "Error"
                };
            }
        } catch (err: any) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
                data: null
            })
        }
    },
    findById: async (req: Request, res: Response) => {
        try {
            const { data, status } = await categoryModel.findById(Number(req.params.id))
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
    create: async (req: Request, res: Response) => {
        try {
            const { status, data } = await categoryModel.create(req.body);
            if (status) {
                return res.status(201).json({
                    message: "Created",
                    data
                })
            } else {
                throw {
                    message: "Error!"
                }
            }
        } catch (err: any) {
            console.log('err', err);
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    },

}