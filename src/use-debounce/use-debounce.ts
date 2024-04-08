import { useEffect, useRef } from 'react';

type Timeout = ReturnType<typeof setTimeout> | null;

export const useDebounce = <T>(callback: (...args: T[]) => void, delay: number) => {
  const timeoutRef = useRef<Timeout>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: T[]) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
