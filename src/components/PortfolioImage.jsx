import { useState } from 'react';
import placeholder from '../assets/placeholder.svg';

export function PortfolioImage({ image, ...props }) {
  const [unavailable, setUnavailable] = useState(false);

  return (
    <img
      {...props}
      src={unavailable ? placeholder : image.src}
      alt={unavailable ? `${image.alt} (imagem indisponível)` : image.alt}
      onError={unavailable ? undefined : () => setUnavailable(true)}
    />
  );
}
