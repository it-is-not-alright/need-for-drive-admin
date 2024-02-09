import { useEffect } from 'react';

const useClickAway = (selectors: string, callback: () => void) => {
  const eventHandler = (event: MouseEvent) => {
    const { target } = event;
    if (!(target instanceof Element) || !target.closest(selectors)) {
      callback();
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', eventHandler);
    return () => document.body.removeEventListener('click', eventHandler);
  }, []);
};

export default useClickAway;
