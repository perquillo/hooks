import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { useLocalStorage } from './use-local-storage';

describe('useLocalStorage', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'value'));
    const [storedValue] = result.current;

    expect(storedValue).toBe('value');
  });

  it('should return the correct state when setting a new value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'value'));

    const [, setValue] = result.current;
    act(() => setValue('new value'));

    const [storedValue] = result.current;
    expect(storedValue).toBe('new value');
  });

  it('should return the correct state when removing the value', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'value'));

    const [, , removeValue] = result.current;

    act(() => removeValue());

    const [storedValue] = result.current;
    expect(storedValue).toBe(null);
  });
});
