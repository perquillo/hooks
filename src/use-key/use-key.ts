import { useEventCallback } from '../use-event-callback/use-event-callback';

type Key =
  | 'Escape'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Backspace'
  | 'Delete'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown'
  | 'Shift'
  | 'Control'
  | 'Alt'
  | 'Meta'
  | 'CapsLock'
  | 'NumLock'
  | 'ScrollLock'
  | 'Pause'
  | 'Insert'
  | 'PrintScreen'
  | 'ContextMenu'
  | 'Help'
  | 'Break'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'q'
  | 'w'
  | 'e'
  | 'r'
  | 't'
  | 'y'
  | 'u'
  | 'i'
  | 'o'
  | 'p'
  | 'a'
  | 's'
  | 'd'
  | 'f'
  | 'g'
  | 'h'
  | 'j'
  | 'k'
  | 'l'
  | 'z'
  | 'x'
  | 'c'
  | 'v'
  | 'b'
  | 'n'
  | 'm'
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'Minus'
  | 'Equal'
  | 'Backquote'
  | 'Backslash'
  | 'BracketLeft'
  | 'BracketRight'
  | 'Semicolon'
  | 'Quote'
  | 'Comma'
  | 'Period'
  | 'Slash'
  | 'IntlBackslash';

type SpecialKey = 'ctrlKey' | 'shiftKey' | 'altKey' | 'metaKey';

export const useKey = (key: Key, cb: () => void, funcKey?: SpecialKey) => {
  const callback = (event: KeyboardEvent) => {
    const element = event.target as HTMLElement,
      isSearchBar = element.getAttribute('type') === 'search',
      isKey = event.key === key,
      isSpecialKey = !!funcKey && event[funcKey];

    if (isSearchBar) return;

    if (isKey && isSpecialKey) {
      event.preventDefault();
      return cb();
    }

    if (isKey && !funcKey) return cb();
  };

  useEventCallback({ eventName: 'keydown', callback });
};
