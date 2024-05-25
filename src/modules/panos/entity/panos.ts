import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 全景图信息表-panos
 */
@Entity('panos')
export class PanoInfoEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;

  @Column({ comment: '全景图文件地址' })
  panoSrc: string;

  @Column({ comment: '项目id', type: 'int', nullable: true })
  projectId: number;

  @Column({ comment: '相对于地图的位置', type: 'json', nullable: true })
  position: any;

  @Column({ comment: '缩略图' })
  thumb: string;

  @Column({ comment: '路由' })
  route: string;

  @Column({ comment: '描述', nullable: true })
  description: string;

  @Column({ comment: '背景音乐地址', nullable: true })
  music: string;
}
