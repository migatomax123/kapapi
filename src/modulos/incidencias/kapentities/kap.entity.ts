import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class aparatos {
// Entidades
    @PrimaryColumn()
    status: string;

    @Column('text',{
    unique: true,
    })
    codigo: string;

}