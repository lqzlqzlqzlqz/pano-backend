import { CoolController, BaseController } from '@cool-midway/core';
import { ArrowsEntity } from '../../entity/base';
/**
 * 描述
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ArrowsEntity,
})
export class XxxController extends BaseController {}
