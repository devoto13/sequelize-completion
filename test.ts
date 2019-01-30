import { Column, Model, Table } from "sequelize-typescript";

@Table({
    // try typing e.g `indexes` below:

})
export class User extends Model<User> {
  @Column({
    // try typing e.g. `validate` below:

  })
  firstName!: string;
}
