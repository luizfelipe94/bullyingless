import {Model, Column, Table, PrimaryKey, BelongsToMany, Scopes, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Unique} from "sequelize-typescript";

import { Profile } from "./Profile";
import { School } from "./School";

@Table
export class User extends Model<User> {

    @PrimaryKey
    @Column
    public id!: number;

    @Column
    public name!: string;

    @Column
    @Unique
    public username!: string;

    @Column
    public email!: string;

    @Column
    public password!: string;

    @Column
    @ForeignKey(() => Profile)
    public readonly profileId!: number;

    @BelongsTo(() => Profile)
    profile!: Profile

    @Column
    @ForeignKey(() => School)
    public readonly schoolId!: number;

    @BelongsTo(() => School)
    school!: School

    @CreatedAt
    @Column
    public readonly createdAt!: Date;

    @UpdatedAt
    @Column
    public readonly updatedAt!: Date;

}