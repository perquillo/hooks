import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';

import { useOpen } from './use-open';

describe('useOpen', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useOpen());
    const [isOpen] = result.current;

    expect(isOpen).toBe(false);
  });

  it('should open the modal', () => {
    const { result } = renderHook(() => useOpen());
    const [, [open]] = result.current;

    act(() => open());

    const [isOpen] = result.current;
    expect(isOpen).toBe(true);
  });

  it('should close the modal', () => {
    const { result } = renderHook(() => useOpen(true));
    const [, [, close]] = result.current;

    act(() => close());

    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });

  it('should toggle the modal', () => {
    const { result } = renderHook(() => useOpen());
    const [, [, , toggle]] = result.current;

    act(() => toggle());

    const [isOpen] = result.current;
    expect(isOpen).toBe(true);
  });
});
