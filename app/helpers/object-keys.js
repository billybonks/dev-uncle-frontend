import { helper } from '@ember/component/helper';

export function objectKeys(params) {
  return Object.keys(params[0]);
}

export default helper(objectKeys);
