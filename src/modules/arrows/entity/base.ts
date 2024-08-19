import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 描述
 */
@Entity('arrows')
export class ArrowsEntity extends BaseEntity {
  @Column({ comment: 'name' })
  name: string;

  @Column({ comment: 'path' })
  path: string;
}
