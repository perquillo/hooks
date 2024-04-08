import { useEffect, useState } from 'react';

export const useIsVisible = (ref: React.RefObject<HTMLElement>, options: IntersectionObserverInit = {}): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
};
