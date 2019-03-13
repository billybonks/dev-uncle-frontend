import { helper } from '@ember/component/helper';
import dayjs from 'dayjs'

export function dateToNow(params/*, hash*/) {
  return `${dayjs().diff(params[0], 'day')} days ago`
}

export default helper(dateToNow);
