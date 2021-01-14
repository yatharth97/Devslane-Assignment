import { User } from "./user.model";

export interface UserResponse {
    results: User[];
    info: {
        results: number;
        page: number;
    };
}