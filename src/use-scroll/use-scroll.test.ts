import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useScroll } from './use-scroll';

describe('useScroll', () => {
  it('should return an array with two numbers', () => {
    const { result } = renderHook(() => useScroll());
    const [x, y] = result.current;

    expect(x).toBeGreaterThanOrEqual(0);
    expect(y).toBeGreaterThanOrEqual(0);
  });
});
