import dayjs from 'dayjs';

export function initialize() {
  dayjs.extend(dayjs_plugin_relativeTime);
}

export default {
  initialize,
};
