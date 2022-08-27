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

export const toLowerCase = (str) => {
  if (typeof str !== 'string') return str;
  return str.toLowerCase();
};
