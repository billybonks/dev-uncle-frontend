import { helper } from '@ember/component/helper';

export function findBy(params/*, hash*/) {
  return params[0].findBy(params[1], params[2]);
}

export default helper(findBy);
