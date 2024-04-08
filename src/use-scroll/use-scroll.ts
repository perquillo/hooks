import { useCallback, useState } from 'react';

import { useEventCallback } from '../use-event-callback/use-event-callback';

type Ref = (Window & typeof globalThis) | Document | Element;

export const useScroll = (ref: Ref = window) => {
  const [pos, setScrollPosition] = useState([0, 0]);

  const handleScroll = useCallback(() => {
    setScrollPosition([window.scrollX, window.scrollY]);
  }, []);

  useEventCallback({ eventName: 'scroll', callback: handleScroll, element: ref });

  return pos;
};
