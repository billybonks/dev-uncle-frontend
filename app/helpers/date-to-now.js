import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export function dateToNow(params/*, hash*/) {
  return `${dayjs(params[0]).fromNow()}`;
}

export default helper(dateToNow);
