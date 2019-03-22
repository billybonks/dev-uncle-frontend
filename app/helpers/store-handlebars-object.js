import { helper } from '@ember/component/helper';

export function storeHandlebarsObject(params) {
  params[0].set(params[1], params[2]);
  return null;
}

export default helper(storeHandlebarsObject);
