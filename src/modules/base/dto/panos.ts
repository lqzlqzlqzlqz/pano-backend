import { Rule, RuleType } from '@midwayjs/validate';
/**
 * 全景图参数校验
 */
export class PanoInfoDTO {
  // 项目id
  @Rule(RuleType.number().required())
  projectId: number;

  // 全景图id
  @Rule(RuleType.number().required())
  panoId: number;
}
