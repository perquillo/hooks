import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import { useHasMounted } from './use-has-mounted';

describe('useHasMounted', () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useHasMounted());
    const hasMounted = result.current;

    expect(hasMounted).toBe(true);
  });
});
