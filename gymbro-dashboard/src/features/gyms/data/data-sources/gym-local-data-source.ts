import { store } from "@/core/data/frameworks/datasources/local/redux/store";
import { injectable } from "tsyringe";
import { IGYM } from "../../domain/entities/gym.entity";
import { setGYM } from "../../infrastructure/data/localstorage/redux/gym.slice";

export interface GYMLocalDataSource {
    saveGYM(gym: IGYM): void;
    getGYM(): IGYM | null;
    // removeGYM(): IGYM | null;
}

@injectable()
export class GYMLocalDataSourceImpl implements GYMLocalDataSource {

    saveGYM(gym: IGYM) {
        store.dispatch(setGYM(gym));
    }

    getGYM(): IGYM | null {
        const currentState = store.getState();
        return currentState.gym.gym;
    }

    // removeGYM(): IGYM | null {
    // }

}