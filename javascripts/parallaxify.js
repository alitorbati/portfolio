// Created by Ali Torbati
// ali.torbati@gmail.com
// 2015

(function ($) {

  $.fn.parallaxify = function() {

    return this.each(function() {
      console.log('asd');
      var $element = $(this);
      var lastPercent = 0;

      function percentageSeen () {
        var viewportHeight = $(window).height(),
            winScrollTop = $(window).scrollTop(),
            elementOffsetTop = $element.offset().top,
            elementHeight = $element.height();

        var distance = (winScrollTop + viewportHeight) - elementOffsetTop;
        var percentage = distance / ((viewportHeight + elementHeight) / 100);

        if (percentage < 0) return 0;
        else if (percentage > 100) return 100;
        else return percentage;
      }

      function updateBackgroundPosition(percent) {
        $element.css({ 'background-position-y' : percent+'%' });
        if (lastPercent != percent) {
          $element.css({ 'background-position-y' : percent+'%' });
        }
        lastPercent = percent;
      }

      // run once, then update on scroll
      updateBackgroundPosition(percentageSeen());

      $(window).on('scroll', function() {
        updateBackgroundPosition(percentageSeen());
      });
    });
  };

})(jQuery);
