import Repository from "../interfaces/repository.interface";
import { User } from "../models/User";

export default interface IUserRepository extends Repository<User> {
    
}