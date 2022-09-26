import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public urlCode: number;

  @Column()
  public title: string;

  @Column()
  public longUrl: string;

  @Column()
  public shortUrl: string;
}
