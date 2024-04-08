import type { MouseEvent } from 'react';
import { useState } from 'react';

import { useEventCallback } from '../use-event-callback/use-event-callback';

export const useMouse = () => {
  const [position, setPostion] = useState({ x: 0, y: 0 });

  const callback = (e: MouseEvent) => {
    setPostion({ x: e.clientX, y: e.clientY });
  };

  useEventCallback({ callback, eventName: 'mousemove' });

  return position;
};
