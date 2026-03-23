(function() {
  'use strict';

  // Mapping de nomes  de arquivo para imagens locais
  const imageMapping = {
    'whatsapp-image-2024-11-26-at-08.58.36.jpeg': 'assets/images/whatsapp-image-2024-11-26-at-08.58.36.jpeg',
    'whatsapp-image-2024-11-26-at-08.58.39-4.jpeg': 'assets/images/whatsapp-image-2024-11-26-at-08.58.39-4.jpeg',
    'whatsapp-image-2024-11-26-at-17.55.24.jpeg': 'assets/images/whatsapp-image-2024-11-26-at-17.55.24.jpeg',
    'whatsapp-image-2024-11-26-at-18.08.08.jpeg': 'assets/images/whatsapp-image-2024-11-26-at-18.08.08.jpeg',
    'whatsapp-image-2024-11-27-at-15.56.02.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-15.56.02.jpeg',
    'whatsapp-image-2024-11-27-at-16.54.53.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-16.54.53.jpeg',
    'whatsapp-image-2024-11-27-at-17.25.59-1.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-17.25.59-1.jpeg',
    'whatsapp-image-2024-11-27-at-17.25.59-2.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-17.25.59-2.jpeg',
    'whatsapp-image-2024-11-27-at-17.25.59.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-17.25.59.jpeg',
    'whatsapp-image-2024-11-27-at-17.26.00-1.jpeg': 'assets/images/whatsapp-image-2024-11-27-at-17.26.00-1.jpeg',
    'whatsapp-image-2024-12-02-at-19.46.18.jpeg': 'assets/images/whatsapp-image-2024-12-02-at-19.46.18.jpeg',
    'whatsapp-image-2024-12-24-at-09.13.28.jpeg': 'assets/images/whatsapp-image-2024-12-24-at-09.13.28.jpeg',
    'whatsapp-image-2024-12-24-at-09.13.32-1.jpeg': 'assets/images/whatsapp-image-2024-12-24-at-09.13.32-1.jpeg',
    'whatsapp-image-2024-12-24-at-09.13.32-2.jpeg': 'assets/images/whatsapp-image-2024-12-24-at-09.13.32-2.jpeg',
    'whatsapp-image-2024-12-24-at-09.13.32-3.jpeg': 'assets/images/whatsapp-image-2024-12-24-at-09.13.32-3.jpeg',
    'whatsapp-image-2024-12-24-at-09.13.32.jpeg': 'assets/images/whatsapp-image-2024-12-24-at-09.13.32.jpeg',
    'whatsapp-image-2025-01-16-at-18.10.15-1.jpeg': 'assets/images/whatsapp-image-2025-01-16-at-18.10.15-1.jpeg',
    'whatsapp-image-2024-11-26-at-18.08.08.jpg': 'assets/images/whatsapp-image-2024-11-26-at-18.08.08.jpg',
    'whatsapp-image-2024-11-26-at-17.55.24.jpg': 'assets/images/whatsapp-image-2024-11-26-at-17.55.24.jpg'
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Atualizar todas as imagens do slideshow para versões locais
    const slideshowImages = document.querySelectorAll('.wp-block-jetpack-slideshow_image');
    
    slideshowImages.forEach(img => {
      const src = img.getAttribute('src');
      if (src) {
        // Extrair o nome do arquivo de um URL
        const fileName = src.split('/').pop().split('?')[0];
        
        if (imageMapping[fileName]) {
          img.setAttribute('src', imageMapping[fileName]);
          img.setAttribute('data-src', imageMapping[fileName]);
          img.removeAttribute('loading');
        }
      }
    });

    // Adicionar event listeners para lazy loading images do slideshow
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const dataSrc = img.getAttribute('data-src');
          if (dataSrc && !img.src.includes('assets/images')) {
            img.src = dataSrc;
            observer.unobserve(img);
          }
        }
      });
    });

    slideshowImages.forEach(img => observer.observe(img));
  });
})();
