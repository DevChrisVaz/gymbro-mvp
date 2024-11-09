export interface CreatePlanDto {
    title: string;
    description: string;
    duration: number;
    price: number;
    branch?: string;
}