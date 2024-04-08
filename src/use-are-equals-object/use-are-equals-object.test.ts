import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useAreEqualsObject } from './use-are-equals-object';

describe('useAreEqualsObject', () => {
  it('should return true if the objects are equal', () => {
    const ob1 = { foo: 'bar' };
    const ob2 = { foo: 'bar' };

    const { result } = renderHook(() => useAreEqualsObject(ob1, ob2));

    expect(result.current).toBe(true);
  });

  it('should return false if the objects are not equal', () => {
    const ob1 = { foo: 'bar' };
    const ob2 = { foo: 'baz' };

    const { result } = renderHook(() => useAreEqualsObject(ob1, ob2));

    expect(result.current).toBe(false);
  });
});
