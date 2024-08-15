import { forwardRef, useState } from 'react';
import images from '../assets/images';

console.log(images.noImage);
function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallback] = useState();
    const handleFallback = () => {
        setFallback(images.noImage);
    };
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleFallback} />;
}

export default forwardRef(Image);
