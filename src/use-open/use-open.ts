import { useState } from 'react';

type UseOpen = (isActive?: boolean) => [isOpen: boolean, [open: () => void, close: () => void, toggle: () => void]];

export const useOpen: UseOpen = (isActive = false) => {
  const [active, setActive] = useState(isActive);

  const open = () => setActive(true);
  const close = () => setActive(false);
  const toggle = () => setActive((prev) => !prev);

  return [active, [open, close, toggle]] as const;
};
