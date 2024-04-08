import { useEffect } from 'react';

type UseEventCallbackProps<T> = {
  element?: (Window & typeof globalThis) | Element | Document;
  eventName: keyof WindowEventMap;
  callback: (e: T) => void;
  active?: boolean;
};

type UseEventCallback = <T>({ element, eventName, callback, active }: UseEventCallbackProps<T>) => void;

export const useEventCallback: UseEventCallback = ({ eventName, callback, element = window, active = true }) => {
  useEffect(() => {
    if (active) {
      element.addEventListener(eventName, callback as () => void);

      return () => {
        element.removeEventListener(eventName, callback as () => void);
      };
    }
  }, [eventName, callback, element, active]);
};
