import { helper } from '@ember/component/helper';

export function objectKeys(params/*, hash*/) {
  return Object.keys(params[0]);
}

export default helper(objectKeys);
