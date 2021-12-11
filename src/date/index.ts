//时间相关的函数

/**
 * 目标时间是否处于起止时间之间。（年月日）
 */
export function isbetweenBoth(target: Date, start: Date, end: Date): boolean {
  let targetTimestamp = target.getTime() / 1000;
  let startTimestamp = start.getTime() / 1000;
  let endTimestamp = end.getTime() / 1000;
  return targetTimestamp >= startTimestamp && targetTimestamp <= endTimestamp;
}

/**
 * 出生日期是否处于投保日/生效日之间。[投保日,生效日]
 */
export function birthRange(target: Date, start: Date, end: Date): boolean {
  const y = start.getFullYear();
  const y2 = end.getFullYear();
  target.setFullYear(y);
  let flag = isbetweenBoth(target, start, end);
  if (!flag && y != y2) {
    target.setFullYear(y2);
    flag = isbetweenBoth(target, start, end);
  }
  return flag;
}
