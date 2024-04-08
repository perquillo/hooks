import { useCallback, useState } from 'react';

import { useEventCallback } from '../use-event-callback/use-event-callback';

type Position = 'x' | 'y';

export const useScrollDirection = (position: Position = 'y', ref = window) => {
  const [direction, setDirection] = useState(position === 'y' ? 'down' : 'left');
  const [lastScroll, setLastScroll] = useState(0);
  const [currentPos, setCurrentPos] = useState(0);

  const handleScroll = useCallback(() => {
    setCurrentPos(ref[position === 'y' ? 'scrollY' : 'scrollX']);

    if (currentPos > lastScroll) {
      setDirection(position === 'y' ? 'down' : 'right');
    } else {
      setDirection(position === 'y' ? 'up' : 'left');
    }

    setLastScroll(currentPos <= 0 ? 0 : currentPos);
  }, [ref, currentPos, lastScroll, position]);

  useEventCallback({
    callback: handleScroll,
    eventName: 'scroll',
    element: ref
  });

  return direction;
};
