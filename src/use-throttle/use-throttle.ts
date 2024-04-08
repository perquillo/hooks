import { useEffect, useRef } from 'react';

export const useThrottle = (fn: () => void, delay: number) => {
  const lastRan = useRef(0);

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRan.current >= delay) {
          fn();
          lastRan.current = Date.now();
        }
      },
      delay - (Date.now() - lastRan.current)
    );

    return () => {
      clearTimeout(handler);
    };
  }, [fn, delay]);
};
