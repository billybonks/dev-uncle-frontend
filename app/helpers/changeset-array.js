import { helper } from '@ember/component/helper';
import Changeset from 'ember-changeset';

export function changesetArray(params/*, hash*/) {
  return params[0].map((item) => {
    return new Changeset(item);
  });
}

export default helper(changesetArray);
