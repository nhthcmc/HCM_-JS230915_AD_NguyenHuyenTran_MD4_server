import { PrismaClient } from "@prisma/client";
import { Category } from "../common/interface";
const prisma = new PrismaClient()

export const categoryModel = {
    findAll: async () => {
        let data = await prisma.category.findMany()
        return {
            status: true,
            message: "All categories",
            data
        }
    },
    create: async (data: Category) => {
        let category = await prisma.category.create({
            data: {
                ...data
            }
        })
        return {
            status: true,
            message: "Created",
            data: category
        }
    },
    update: async (id: number, category: Category) => {
        let data = await prisma.category.update({
            where: {
                id
            },
            data: {
                ...category,
            }
        })
        return {
            status: true,
            message: "Updated",
            data
        }
    },
    delete: async (id: number) => {
        let data = await prisma.category.delete({
            where: {
                id
            }
        })
        return {
            status: true,
            message: "Deleted",
            data
        }
    }
}