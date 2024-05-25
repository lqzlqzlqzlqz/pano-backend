import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 项目
 */
@Entity('project')
export class ProjectEntity extends BaseEntity {
  @Column({ comment: '项目名称' })
  name: string;

  @Column({ comment: '地图图片地址', nullable: true })
  mapSrc: string;

  @Column({ comment: '地图宽', nullable: true })
  mapWidth: number;

  @Column({ comment: '地图高', nullable: true })
  mapHeight: number;

  @Column({ comment: '描述', nullable: true })
  description: string;
}
