import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

// 获取项目运行环境
const getEnv = () => {
  return process.env.NODE_ENV;
};

export const getConfiguration = () => {
  return yaml.load(
    readFileSync(join(process.cwd(), `./config/.${getEnv()}.yaml`), 'utf8'),
  ) as Record<string, any>;
};
