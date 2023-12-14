import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class aparatos {
// Entidades
    @PrimaryColumn()
    aula: string;

    @Column('text',{
    unique: true,
    })
    tipo: string;

}