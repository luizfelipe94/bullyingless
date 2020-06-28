import {Model, Column, Table, PrimaryKey, BelongsToMany, Scopes, CreatedAt, UpdatedAt, Default, AllowNull, DataType, Unique} from "sequelize-typescript";

type Profiles = 'Administrator' | 'Student';

@Table
export class Profile extends Model<Profile> {

    @Column
    @PrimaryKey
    public id!: number;

    @Unique
    @Default("Student")
    @Column(DataType.ENUM('Administrator', 'Student'))
    public name!: Profiles;

    @Column
    @AllowNull(true)
    public description!: string;

    @CreatedAt
    @Column
    public readonly createdAt!: Date;

    @UpdatedAt
    @Column
    public readonly updatedAt!: Date;

}