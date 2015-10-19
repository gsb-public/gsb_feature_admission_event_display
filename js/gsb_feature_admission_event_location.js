(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_location = {
    attach: function (context, settings) {
      //$('.view-content h3').each(function(){
      //  $(this).nextUntil('h3')
      //    .wrapAll('<div class="accordion-body-wrap">').parent().add(this);
      //});
      $('.view-content h3').each(function() {
        $(this).addClass('acc-title');
      });
      //$('.accordion-body-wrap div').addClass('acc-body');
      $('.view-content div').addClass('acc-body');
    }
  };
})(jQuery);