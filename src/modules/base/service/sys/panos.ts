import { Inject, Provide, Config, InjectClient } from '@midwayjs/decorator';
import { BaseService, CoolCommException } from '@cool-midway/core';
import { PanoInfoDTO } from '../../dto/panos';
import * as _ from 'lodash';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from '../../../project/entity/project';
import { PanoInfoEntity } from '../../../panos/entity/panos';
import { MarkersEntity } from '../../../markers/entity/project';
/**
 * 全景图
 */
@Provide()
export class PanosService extends BaseService {
  @InjectEntityModel(ProjectEntity)
  projectEntity: Repository<ProjectEntity>;

  @InjectEntityModel(PanoInfoEntity)
  panoInfoEntity: Repository<PanoInfoEntity>;

  @InjectEntityModel(MarkersEntity)
  markersEntity: Repository<MarkersEntity>;

  /**
   * 获取全景图信息
   * @param getPanos
   */
  async getPanos(info: PanoInfoDTO) {
    const detail: {
      projectDetail?: any;
      panoDetail?: any;
      markersList?: any;
      panosList?: any;
    } = {};
    const promise = [];
    promise.push(
      this.projectEntity
        .findOne({ where: { id: info.projectId } })
        .then(res => {
          detail.projectDetail = res;
        })
    );
    promise.push(
      this.panoInfoEntity.findOne({ where: { id: info.panoId } }).then(res => {
        detail.panoDetail = res;
      })
    );
    promise.push(
      this.panoInfoEntity
        .find({ where: { projectId: info.projectId } })
        .then(res => {
          detail.panosList = res;
        })
    );
    promise.push(
      this.markersEntity.find({ where: { panoId: info.panoId } }).then(res => {
        detail.markersList = res;
      })
    );

    await Promise.all(promise);
    return detail;
  }
}
