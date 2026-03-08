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

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const groupBy = <T, K extends keyof T>(
  arr: T[],
  key: K
): Record<string, T[]> => {
  return arr.reduce<Record<string, T[]>>((acc, item) => {
    const group = String(item[key]);
    if (acc[group]) acc[group].push(item);
    else acc[group] = [item];
    return acc;
  }, {});
};
