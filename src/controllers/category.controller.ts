import { Request, Response } from "express";
import { categoryModel } from "../models/category.model";

export const categoryController = {
    findAll: async (res: Response) => {
        try {
            const { status, message, data } = await categoryModel.findAll();
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
            const { status, message, data } = await categoryModel.create(req.body);
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
            const categoryId = parseInt(req.params.id)
            const { status, message, data } = await categoryModel.update(categoryId, req.body);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Category not found!"
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
            const categoryId = parseInt(req.params.id)
            const { status, message, data } = await categoryModel.delete(categoryId);
            if (status) {
                return res.status(200).json({
                    message,
                    data
                })
            } else {
                throw {
                    message: "Category not found!"
                }
            }
        } catch (err) {
            return res.status(500).json({
                message: (err as Error).message || "Internal Server Error",
            })
        }
    }
}