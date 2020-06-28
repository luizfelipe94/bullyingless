import UserRepository from "../repository/user.repository";
import { User } from "../models/User";

export default class UserService {

    private userRepository: UserRepository;

    constructor(){
        this.userRepository = new UserRepository();
    }

    async list(user: any, page: number, pageSize: number = 0): Promise<any> {

        const result = await this.userRepository.list(user, page, pageSize);
        return result;

    }

}