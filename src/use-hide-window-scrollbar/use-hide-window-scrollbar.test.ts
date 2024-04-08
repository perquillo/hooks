import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useHideWindowScrollbar } from './use-hide-window-scrollbar';

describe('useHideWindowScrollbar', () => {
  it('should check if the scrollbar is hidden', () => {
    renderHook(() => useHideWindowScrollbar(true));
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('should check if the scrollbar is visible', () => {
    renderHook(() => useHideWindowScrollbar(false));
    expect(document.body.style.overflow).toBe('auto');
  });

  it('should check if the scrollbar is visible after the component is unmounted', () => {
    const { unmount } = renderHook(() => useHideWindowScrollbar(true));
    unmount();
    expect(document.body.style.overflow).toBe('auto');
  });
});
