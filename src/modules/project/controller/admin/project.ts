import { CoolController, BaseController } from '@cool-midway/core';
import { ProjectEntity } from '../../entity/project';
/**
 * 项目
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ProjectEntity,
})
export class ProjectController extends BaseController {}
