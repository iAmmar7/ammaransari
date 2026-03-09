import { useCallback, useRef, useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

export default function useSessionStorage<T>(key: string, initialValue: T) {
  const prevRaw = useRef<string | null>(null);
  const prevParsed = useRef<T>(initialValue);

  const value = useSyncExternalStore(
    subscribe,
    () => {
      const raw = sessionStorage.getItem(key);
      if (raw === prevRaw.current) return prevParsed.current;
      prevRaw.current = raw;
      prevParsed.current = raw !== null ? (JSON.parse(raw) as T) : initialValue;
      return prevParsed.current;
    }, // Client Snapshot
    () => initialValue // Server Snapshot
  );

  const setValue = useCallback(
    (newValue: T | ((prev: T) => T)) => {
      const resolved =
        typeof newValue === 'function' ? (newValue as (prev: T) => T)(value) : newValue;
      sessionStorage.setItem(key, JSON.stringify(resolved));

      // Storage has changed - this will trigger re-render
      window.dispatchEvent(new StorageEvent('storage'));
    },
    [key, value]
  );

  return [value, setValue] as const;
}
