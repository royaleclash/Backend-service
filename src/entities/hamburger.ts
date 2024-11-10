import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Hamburger {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;
}