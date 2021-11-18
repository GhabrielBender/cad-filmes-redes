import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";
@Entity("movies")
export class Movie {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  director: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
