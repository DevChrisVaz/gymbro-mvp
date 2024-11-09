export interface CreateUserDTO {
    userName: string;
    password: string;
    role?: string;
    firstName: string;
    lastName: string;
    status?: string;
}