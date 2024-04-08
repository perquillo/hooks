import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react';

import { useKey } from './use-key';

describe('useKey', () => {
  Object.defineProperty(window, 'getAttribute', {
    value: jest.fn()
  });

  it('should call the callback when the key is pressed', () => {
    const callback = jest.fn();
    const key = 'Enter';
    renderHook(() => useKey(key, callback));

    act(() => {
      const event = new KeyboardEvent('keydown', { key });
      window.dispatchEvent(event);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not call the callback when the key is not pressed', () => {
    const callback = jest.fn();
    const key = 'Enter';
    renderHook(() => useKey(key, callback));

    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);
    });

    expect(callback).toHaveBeenCalledTimes(0);
  });

  it('should call the callback when the key is pressed and the event is not passive', () => {
    const callback = jest.fn();
    const key = 'Enter';
    renderHook(() => useKey(key, callback));

    act(() => {
      const event = new KeyboardEvent('keydown', { key });
      window.dispatchEvent(event);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should call the callback when the key and ctrlKey are pressed', () => {
    const callback = jest.fn();
    const key = 'Enter';
    renderHook(() => useKey(key, callback, 'ctrlKey'));

    act(() => {
      const event = new KeyboardEvent('keydown', { key, ctrlKey: true });
      window.dispatchEvent(event);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
