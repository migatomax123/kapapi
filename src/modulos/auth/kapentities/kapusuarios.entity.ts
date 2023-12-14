import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Autore {
// Entidades
    @PrimaryColumn()
    rol: string;

    @Column('text',{
    unique: true,
    })
    nombre: string;

}