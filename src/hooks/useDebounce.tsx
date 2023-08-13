import React, { useEffect, useState } from "react";

function useDebounce(value: string | null, time: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDebounceValue(value);
    }, time);

    return () => {
      clearTimeout(timeId);
    };
  }, [value, time]);
  return debounceValue;
}

export default useDebounce;
