"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const images = [
    { src: '/gallery/photo1.jpg', alt: 'Фото 1' },
    { src: '/gallery/photo2.jpg', alt: 'Фото 2' },
    { src: '/gallery/photo3.jpg', alt: 'Фото 3' },
    { src: '/gallery/photo4.jpg', alt: 'Фото 4' },
    { src: '/gallery/photo5.jpg', alt: 'Фото 5' },
    { src: '/gallery/photo6.jpg', alt: 'Фото 6' },
    { src: '/gallery/photo7.jpg', alt: 'Фото 7' },
    { src: '/gallery/photo8.jpg', alt: 'Фото 8' },
    { src: '/gallery/photo9.jpg', alt: 'Фото 9' },
    { src: '/gallery/photo10.jpg', alt: 'Фото 10' },
    { src: '/gallery/photo11.jpg', alt: 'Фото 11' },
    { src: '/gallery/photo12.jpg', alt: 'Фото 12' },
    { src: '/gallery/photo13.jpg', alt: 'Фото 13' },
    { src: '/gallery/photo14.jpg', alt: 'Фото 14' },
    { src: '/gallery/photo15.jpg', alt: 'Фото 15' },
    { src: '/gallery/photo16.jpg', alt: 'Фото 16' },
    { src: '/gallery/photo17.jpg', alt: 'Фото 17' },
  ];

  const handleImageClick = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
  };

  const handlePrevious = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex].src);
    setSelectedIndex(newIndex);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedImage(images[newIndex].src);
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    }
  }, [selectedImage, images.length]);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.gallery-image');
      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible) {
          image.classList.add('fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши работы</h2>
        
        {/* Horizontal scrollable container */}
        <div className="relative">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-none w-80 h-80 relative snap-center cursor-pointer"
                onClick={() => handleImageClick(image.src, index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
              {/* Navigation buttons */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-opacity"
                onClick={handlePrevious}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-opacity"
                onClick={handleNext}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-opacity"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 rounded-full px-4 py-2">
                {selectedIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 