// Lodash like utilities

export const isUndefined = (val) => {
  if (!val || typeof val === 'undefined') return true;
  return false;
};

export const isNull = (val) => {
  if (val === null) return true;
  return false;
};

export const isNil = (val) => {
  if (isUndefined(val) || isNull(val)) return true;
  return false;
};

export const isString = (str) => {
  if (typeof str === 'string') return true;
  return false;
};

export const isObject = (val) => {
  if (isNil(val)) return false;
  if (typeof val === 'object' && !Array.isArray(val)) return true;
  return false;
};

export const isArray = (val) => {
  if (Array.isArray(val)) return true;
  return false;
};

export const isEmpty = (val) => {
  if ((isArray(val) || isString(val)) && val.length > 0) return false;
  return true;
};

export const toLowerCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.toLowerCase();
};

export const capitalize = (str) => {
  if (typeof str !== 'string') return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const take = (arr = [], n = 1) => {
  if (n < 0 || !Array.isArray(arr) || arr.length < n) return arr;
  const newArr = [...arr];
  newArr.splice(n, newArr.length - (n - 1));
  return newArr;
};

export const takeRight = (arr = [], n = 1) => {
  if (n < 0 || !Array.isArray(arr) || arr.length < n) return arr;
  const newArr = [...arr];
  newArr.splice(0, newArr.length - n);
  return newArr;
};

export const groupBy = (arr, key) => {
  if (!isArray(arr) || isNil(key)) return arr;
  return arr.reduce((acc, item) => {
    if (acc[item[key]]) acc[item[key]].push(item);
    else acc[item[key]] = [item];
    return acc;
  }, {});
};

export const last = (arr) => {
  if (!isArray(arr) || isEmpty(arr)) return arr;
  return arr[arr.length - 1];
};

export const shuffleArray = (arr) => {
  if (!isArray(arr) || isEmpty(arr)) return arr;
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const isSSR = typeof window === 'undefined';
