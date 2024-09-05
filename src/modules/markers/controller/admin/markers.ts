import { CoolController, BaseController } from '@cool-midway/core';
import { MarkersEntity } from '../../entity/project';
import { PanoInfoEntity } from '../../../panos/entity/panos';
import { ArrowsEntity } from '../../../arrows/entity/base';
/**
 * 项目
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MarkersEntity,
  listQueryOp: {
    select: ['a.*', 'c.path'],
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
      {
        entity: ArrowsEntity,
        alias: 'c',
        condition: 'a.arrowId = c.id',
        type: 'leftJoin',
      },
    ],
  },
})
export class MarkersController extends BaseController {}
