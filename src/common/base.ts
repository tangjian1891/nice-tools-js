/**
 * 判断一个值是否有效
 */
const isDef = (x: any): boolean => {
  return x !== null && x !== undefined;
};

/**
 * 判断一个值是否无效
 */
const isUndef = (x: any): boolean => {
  return x === null || x === undefined;
};

export { isDef, isUndef };
