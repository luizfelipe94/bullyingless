import IUserRespository from "./iuser.repository";
import dbUtils from "../lib/dbUtils";
import { User } from "../models/User";
import { Profile } from "../models/Profile";
import { School } from "../models/School";

export default class UserRepository implements IUserRespository {

    async list(user: any, page: number, pageSize: number = 10): Promise<any> {

        return User.findAll({
            attributes: ['id', 'name', 'email', 'password'],
            include: [
                { model: Profile, required: true },
                { 
                    model: School, 
                    required: true, 
                    where: { id: user.schoolId },
                    attributes: []
                }
            ],
            ...dbUtils.paginate({ page, pageSize })
        });

    }

    // async getById(id: number): Promise<User> {

    // }

    // async save(user: User): Promise<User> {

    // }

    // async update(): Promise<User> {

    // }

    // async delete(): Promise<any> {

    // }

}