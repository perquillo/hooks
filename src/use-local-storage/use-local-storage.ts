import { useState } from 'react';

type StoredValue = string | null;

export const useLocalStorage = (
  key: string,
  initialValue: string
): [storedValue: StoredValue, setValue: (value: string) => void, removeValue: () => void] => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: string) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeValue = () => {
    try {
      setStoredValue(null);
      window.localStorage.removeItem(key);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return [storedValue, setValue, removeValue];
};
