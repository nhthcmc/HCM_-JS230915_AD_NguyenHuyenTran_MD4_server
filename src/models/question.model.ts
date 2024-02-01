import { PrismaClient } from "@prisma/client";
import { Question } from "../common/interface";
const prisma = new PrismaClient()

export const questionModel = {
    findAll: async () => {
        try {
            let questions = await prisma.question.findMany({
                include: {
                    answers: true
                }
            })
            return {
                status: true,
                message: "All questions",
                data: questions
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
            }
        }
    },
    findById: async (questionId: number) => {
        try {
            let question = await prisma.question.findUnique({
                where: {
                    id: questionId
                },
                include: {
                    answers: true
                }
            })
            return {
                data: question,
                status: true,
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
    findByIdWithAnswer: async (questionId: number) => {
        try {
            let question = await prisma.question.findUnique({
                where: {
                    id: questionId
                },
                include: {
                    answers: true
                }
            })
            return {
                data: question,
                status: true
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


    create: async (data: Question) => {
        try {
            let question = await prisma.question.create({
                data: {
                    ...data
                },
                include: {
                    answers: true
                }
            })
            return {
                status: true,
                message: "Created",
                data: question
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
    findWithCondition: async (categoryId: number, levelCondition: number, limit: number) => {
        try {
            let questions = await prisma.question.findMany({
                where: {
                    categoryId: categoryId,
                    level: levelCondition
                },
                take: limit,
                include: {
                    answers: true
                }
            })
            return {
                data: questions,
                status: true
            }
        } catch (err) {
            console.log('err', err)
            return {
                err,
                status: false,
            }
        }
    }
}