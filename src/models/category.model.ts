import { PrismaClient } from "@prisma/client";
import { Category } from "../common/interface";
const prisma = new PrismaClient()

export const categoryModel = {
    findAll: async () => {
        try {
            let categories = await prisma.category.findMany()
            return {
                status: true,
                message: "All categories",
                data: categories
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    },
    create: async (data: Category) => {
        try {
            let category = await prisma.category.create({
                data: {
                    ...data
                },
                include: {
                    questions: {
                        include: {
                            answers: true
                        }
                    }
                }
            })
            return {
                status: true,
                message: "Created",
                data: category
            }
        } catch (err: any) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    },
    findById: async (categoryId: number) => {
        try {
            let category = await prisma.category.findUnique({
                where: {
                    id: categoryId
                },
                include: {
                    questions: {
                        include: {
                            answers: true
                        }
                    }
                }
            })
            return {
                data: category,
                status: true,
                err: null
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
                data: null
            }
        }
    }
}