import type { MouseEvent, RefObject } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { useEventCallback } from '../use-event-callback/use-event-callback';

type El = (Window & typeof globalThis) | Element | Document;

export const useOutsideOnClick = (ref: RefObject<HTMLElement>, close: () => void, element: El = window) => {
  const [isOutsideElement, setIsOutsideElement] = useState(false);

  const callback = useCallback(
    (event: MouseEvent) => {
      const target = event.target as HTMLElement,
        tagName = target.tagName?.toLowerCase();

      if (tagName === 'button' || tagName === 'a') return;

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutsideElement(true);
      } else {
        setIsOutsideElement(false);
      }
    },
    [ref]
  );

  useEffect(() => {
    if (isOutsideElement) {
      setIsOutsideElement(false);
      return close();
    }

    return;
  }, [isOutsideElement, close, setIsOutsideElement]);

  useEventCallback({ eventName: 'click', callback, element });

  return isOutsideElement;
};
