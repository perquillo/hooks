import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useCountdownTimer } from './use-countdown-timer';

describe('useCountdownTimer', () => {
  it('should return the correct countdown time', () => {
    const targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() + 10);

    const { result, rerender } = renderHook(() => useCountdownTimer(targetDate));

    rerender();
    expect(result.current).toEqual([0, 0, 0, 9]);
  });

  it('should return 0 when the countdown is over', () => {
    const targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() - 1);

    const { result } = renderHook(() => useCountdownTimer(targetDate));

    expect(result.current).toEqual([0, 0, 0, 0]);
  });
});
