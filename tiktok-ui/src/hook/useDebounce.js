import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const saveTime = setTimeout(() => setDebounce(value), delay);
        return () => clearTimeout(saveTime);
    }, [value]);
    return debounce;
}
export default useDebounce;
