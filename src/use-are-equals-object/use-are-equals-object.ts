import { useMemo } from 'react';

export const useAreEqualsObject = <T>(ob1: T, ob2: T): boolean => {
  return useMemo(() => JSON.stringify(ob1) === JSON.stringify(ob2), [ob1, ob2]);
};
