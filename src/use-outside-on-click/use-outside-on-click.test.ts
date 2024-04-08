import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useOutsideOnClick } from './use-outside-on-click';

describe('useOutsideOnClick', () => {
  it('should return the correct initial state', () => {
    const ref = { current: document.createElement('span') };
    const { result } = renderHook(() => useOutsideOnClick(ref, () => {}));
    const isOutsideElement = result.current;

    expect(isOutsideElement).toBe(false);
  });

  // TODO: Add more tests
});
