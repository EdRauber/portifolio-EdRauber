import { useState } from 'react';
import { Button } from '@mui/material';
import { PortfolioImage } from './PortfolioImage.jsx';

export function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images, name } = project;
  const slide = images[activeIndex];
  const hasMultipleSlides = images.length > 1;

  function goToAdjacentSlide(direction) {
    setActiveIndex((index) => (index + direction + images.length) % images.length);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      goToAdjacentSlide(event.key === 'ArrowLeft' ? -1 : 1);
    }
  }

  return (
    <section
      className="project-gallery"
      aria-label={`Galeria de imagens de ${name}`}
      onKeyDown={hasMultipleSlides ? handleKeyDown : undefined}
    >
      <PortfolioImage key={slide.src} className="project-slide" image={slide} loading="lazy" width="720" height="360" />
      {hasMultipleSlides && (
        <div className="gallery-controls">
          <Button type="button" variant="outlined" aria-label={`Imagem anterior de ${name}`} onClick={() => goToAdjacentSlide(-1)}>
            <span aria-hidden="true">‹</span>
          </Button>
          <span className="gallery-counter" role="status" aria-atomic="true">
            Imagem {activeIndex + 1} de {images.length}
          </span>
          <Button type="button" variant="outlined" aria-label={`Próxima imagem de ${name}`} onClick={() => goToAdjacentSlide(1)}>
            <span aria-hidden="true">›</span>
          </Button>
        </div>
      )}
    </section>
  );
}
