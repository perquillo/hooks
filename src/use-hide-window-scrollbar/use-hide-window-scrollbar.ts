import { useCallback, useEffect } from 'react';

export const useHideWindowScrollbar = (isOpen: boolean) => {
  const hideScrollbar = useCallback(() => (document.body.style.overflow = 'hidden'), []);
  const showScrollbar = useCallback(() => (document.body.style.overflow = 'auto'), []);

  useEffect(() => {
    if (isOpen) hideScrollbar();
    if (!isOpen) showScrollbar();

    return () => {
      showScrollbar();
    };
  }, [isOpen, hideScrollbar, showScrollbar]);
};
