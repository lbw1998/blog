// 解析时间
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const date = new Date(time);
  const diff = Date.now() - date.getTime();
  let timeStr;
  if (diff < 1000 * 60) {
    // 小于一分钟
    const second = Math.floor(diff / 1000);
    timeStr = second + '秒前';
  } else if (diff < 1000 * 60 * 60) {
    // 小于一小时
    const min = Math.floor(diff / 1000 / 60);
    timeStr = min + '分钟前';
  } else if (diff < 1000 * 60 * 60 * 24) {
    const hour = Math.floor(diff / 1000 / 60 / 60);
    timeStr = hour + '小时前';
  } else if (diff < 1000 * 60 * 60 * 24 * 7) {
    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    timeStr = day + '天前';
  } else {
    // {y}-{m}-{d} {h}:{i}:{s}
    const format = pattern || '{y}-{m}-{d} ';
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    };
    timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key];
      // Note: getDay() returns 0 on Sunday
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value];
      }
      if (result.length > 0 && value < 10) {
        value = '0' + value;
      }
      return value || 0;
    });
  }

  return timeStr;
}
