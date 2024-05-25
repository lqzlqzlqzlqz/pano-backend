import { BaseEntity } from '@cool-midway/core';
import { Column, Entity } from 'typeorm';

/**
 * 项目
 */
@Entity('markers')
export class MarkersEntity extends BaseEntity {
  @Column({ comment: '全景图id', type: 'int', nullable: true })
  panoId: number;

  @Column({ comment: '坐标或区域 position/polygon', nullable: true })
  pt: string;

  @Column({ comment: '图标类型 graph/arrow', nullable: true })
  mt: string;

  @Column({ type: 'json', comment: '样式设置', nullable: true })
  svgStyle: any;

  @Column({ type: 'json', comment: '提示信息', nullable: true })
  tooltip: any;

  @Column({ type: 'boolean', comment: '是否显示', default: true })
  visible: boolean;

  @Column({ comment: 'HTML内容', nullable: true })
  html: string;

  @Column({ type: 'json', comment: '尺寸大小', nullable: true })
  size: any;

  @Column({ comment: '导航提示', nullable: true })
  navigate: string;

  @Column({ comment: '鼠标悬停放大比例', nullable: true })
  hoverScale: number;

  @Column({ comment: '显示图片地址', type: 'json', nullable: true })
  pop: any;

  @Column({ comment: 'position', type: 'json', nullable: true })
  position: any;

  @Column({ comment: 'polygon', type: 'json', nullable: true })
  polygon: any;
}
