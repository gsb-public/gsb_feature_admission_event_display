(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_location = {
    attach: function (context, settings) {

      $('.view-content h3').each(function() {
        $(this).addClass('acc-title');
      });

      $('.view-content div').addClass('acc-body');
    }
  };
})(jQuery);
