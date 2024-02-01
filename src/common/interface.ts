export interface Category {
    // id: number,
    name: string;
}
export interface Question {
    categoryId: number,
    // created_at: string,
    content: string,
    level: number;
}