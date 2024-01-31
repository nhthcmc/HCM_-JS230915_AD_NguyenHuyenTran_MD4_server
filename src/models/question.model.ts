import { PrismaClient } from "@prisma/client";
import { Question } from "../common/interface";
const prisma = new PrismaClient()

export const questionModel = {
    findAll: async () => {
        let data = await prisma.question.findMany()
        return {
            status: true,
            message: "All questions",
            data
        }
    },
    create: async (data: Question) => {
        let question = await prisma.question.create({
            data: {
                ...data
            }
        })
        return {
            status: true,
            message: "Created",
            data: question
        }
    },
    update: async (id: number, question: Question) => {
        let data = await prisma.question.update({
            where: {
                id
            },
            data: {
                ...question,
            }
        })
        return {
            status: true,
            message: "Updated",
            data
        }
    },
    delete: async (id: number) => {
        let data = await prisma.question.delete({
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