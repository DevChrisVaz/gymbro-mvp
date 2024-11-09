import { RegisterGYMDto } from "../../application/dto/RegisterGYM.dto";

export interface GYMRepository {
    registerGYM(dto: RegisterGYMDto): Promise<string>;
}