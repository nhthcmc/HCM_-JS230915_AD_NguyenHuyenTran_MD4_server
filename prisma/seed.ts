import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import answers from "./answer";
import categories from "./categories";
import questions from "./questions";
(async () => {
    try {
        await prisma.answer.createMany({
            data: [
                ...answers
            ]
        })
        await prisma.category.createMany({
            data: [
                ...categories
            ]
        })
        await prisma.question.createMany({
            data: [
                ...questions
            ]
        })
    } catch (err) {
        console.log('err', err)
    }
})()