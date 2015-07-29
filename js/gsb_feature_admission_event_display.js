(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {
      var height = $("div.views-exposed-form").height();
      var width = $("div.views-exposed-form").width();
      $('div.views-exposed-form :input').change(function(e) {
        overlay_div = '<div id="let-ajax-alone" style="height:' + height + 'px;width:' + width + 'px; position:absolute; margin-bottom:-' + height + 'px;margin-right:-' + width + 'px;z-index:999;"></div>';
        $('div.views-exposed-form').prepend(overlay_div);
      });
    }
};

})(jQuery);

