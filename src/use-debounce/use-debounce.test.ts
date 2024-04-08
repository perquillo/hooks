import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useDebounce } from './use-debounce';

describe('useDebounce', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useDebounce(() => {}, 1000));
    const debouncedCallback = result.current;

    expect(typeof debouncedCallback).toBe('function');
  });

  it('should return a function that calls the callback after the delay', () => {
    jest.useFakeTimers();

    const callback = jest.fn();
    const delay = 1000;
    const { result } = renderHook(() => useDebounce(callback, delay));
    const debouncedCallback = result.current;

    debouncedCallback();
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(delay);
    expect(callback).toHaveBeenCalled();
  });

  it('should return a function that calls the callback with the correct arguments', () => {
    jest.useFakeTimers();

    const callback = jest.fn();
    const delay = 1000;
    const { result } = renderHook(() => useDebounce(callback, delay));
    const debouncedCallback = result.current;

    debouncedCallback('foo', 'bar');
    jest.advanceTimersByTime(delay);

    expect(callback).toHaveBeenCalledWith('foo', 'bar');
  });
});
