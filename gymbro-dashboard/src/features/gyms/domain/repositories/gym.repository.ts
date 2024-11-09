import { RegisterGYMDto } from "../../application/dto/RegisterGYM.dto";
import { IGYM } from "../entities/gym.entity";

export interface GYMRepository {
    register(registerGYMDto: RegisterGYMDto): Promise<any>;
    getGYM(gymId: string): Promise<IGYM>;
    // storeGYM(gym: IGYM): void;
    // getGYMFromStore(): IGYM | null;
}