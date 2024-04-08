import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useEventCallback } from './use-event-callback';

describe('useEventCallback', () => {
  it('should add and remove event listener', () => {
    const element = document.createElement('div');
    const eventName = 'click';
    const callback = jest.fn();

    renderHook(() => useEventCallback({ element, eventName, callback }));

    element.dispatchEvent(new Event(eventName));
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should not add event listener if active is false', () => {
    const element = document.createElement('div');
    const eventName = 'click';
    const callback = jest.fn();

    renderHook(() => useEventCallback({ element, eventName, callback, active: false }));

    element.dispatchEvent(new Event(eventName));
    expect(callback).not.toHaveBeenCalled();
  });

  it('should remove event listener when active is false', () => {
    const element = document.createElement('div');
    const eventName = 'click';
    const callback = jest.fn();

    const { unmount } = renderHook(() => useEventCallback({ element, eventName, callback }));
    unmount();

    element.dispatchEvent(new Event(eventName));
    expect(callback).not.toHaveBeenCalled();
  });
});
