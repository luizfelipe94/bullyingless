import {Model, Column, Table, PrimaryKey, BelongsToMany, Scopes, CreatedAt, UpdatedAt, Default, AllowNull, DataType, Unique, ForeignKey, BelongsTo} from "sequelize-typescript";

import { Tenant } from "./Tenant";

@Table
export class School extends Model<School> {

    @Column
    @PrimaryKey
    public id!: number;

    @Column
    public name!: string;

    @Column
    @ForeignKey(() => Tenant)
    public readonly tenantId!: number;

    @BelongsTo(() => Tenant)
    tenant!: Tenant

    @CreatedAt
    @Column
    public readonly createdAt!: Date;

    @UpdatedAt
    @Column
    public readonly updatedAt!: Date;

}