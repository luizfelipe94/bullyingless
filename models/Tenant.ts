import {Model, Column, Table, PrimaryKey, BelongsToMany, Scopes, CreatedAt, UpdatedAt, Default, AllowNull, DataType, Unique, AfterFind} from "sequelize-typescript";

@Table
export class Tenant extends Model<Tenant> {

    @Column
    @PrimaryKey
    public id!: number;

    @Column
    public name!: string;

    @Column
    @AllowNull(true)
    public description!: string;

    @Column
    @Default("{}")
    public config!: string;

    @AfterFind
    static parseConfig(tenant: Tenant){
        
    }

}