import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timerId = useRef(null);

  useEffect(() => {
    return () => {
      if (timerId) clearTimeout(timerId.current);
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timerId) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

export default useDebounce;
