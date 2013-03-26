// Octopress uses Ender.js, which uses the $ variable.
jQuery.noConflict();

jQuery(function() {
  if(Galleria) {
    Galleria.loadTheme('/assets/galleria/themes/classic/galleria.classic.min.js');
    Galleria.configure({
      lightbox: true
    });
    Galleria.run('.image-gallery');
  }
});