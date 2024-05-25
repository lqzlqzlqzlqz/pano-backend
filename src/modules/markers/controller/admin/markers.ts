import { CoolController, BaseController } from '@cool-midway/core';
import { MarkersEntity } from '../../entity/project';
import { PanoInfoEntity } from '../../../panos/entity/panos';
/**
 * 项目
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MarkersEntity,
  listQueryOp: {
    select: ['a.*'],
    fieldEq: [
      {
        column: 'a.panoId',
        requestParam: 'panoId',
      },
    ],
    join: [
      {
        entity: PanoInfoEntity,
        alias: 'b',
        condition: 'a.panoId = b.id',
        type: 'leftJoin',
      },
    ],
  },
})
export class MarkersController extends BaseController {}
