export const isEmpty = (val: unknown): boolean => {
  if (Array.isArray(val) || typeof val === 'string') return val.length === 0;
  return true;
};

export const toLowerCase = (str: unknown): string => {
  if (typeof str !== 'string') return String(str);
  return str.toLowerCase();
};

export const take = <T>(arr: T[] = [], n: number = 1): T[] => {
  if (n < 0 || !Array.isArray(arr) || arr.length < n) return arr;
  return arr.slice(0, n);
};
