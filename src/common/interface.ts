export interface Category {
    id: number,
    name: string;
}
export interface Question {
    id: number,
    // category   category @relation(fields: [categoryId], references: [id])
    created_at: string,
    content: string,
    level: number;
}