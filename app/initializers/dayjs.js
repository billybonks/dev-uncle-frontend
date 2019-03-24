import dayjs from 'dayjs';

export function initialize() {
  // eslint-disable-next-line
  dayjs.extend(dayjs_plugin_relativeTime);
}

export default {
  initialize,
};
