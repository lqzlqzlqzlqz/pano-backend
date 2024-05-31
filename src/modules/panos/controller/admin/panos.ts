import { CoolController, BaseController } from '@cool-midway/core';
import { PanoInfoEntity } from '../../entity/panos';
import { ProjectEntity } from '../../../project/entity/project';
/**
 * 全景图信息表-panos
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: PanoInfoEntity,
  pageQueryOp: {
    select: ['a.*', 'b.mapSrc', 'b.name'],
    fieldEq: [
      {column: 'a.projectId', requestParam: 'projectId'}
    ],
    join: [
      {
        entity: ProjectEntity,
        alias: 'b',
        condition: 'a.projectId = b.id',
        type: 'leftJoin',
      },
    ],
  },
  listQueryOp: {
    fieldEq: [{ column: 'a.projectId', requestParam: 'projectId' }],
  },
})
export class AdminPanoInfosController extends BaseController {}
