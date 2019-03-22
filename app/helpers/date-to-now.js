import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export function dateToNow(params) {
  return `${dayjs(params[0]).fromNow()}`;
}

export default helper(dateToNow);
