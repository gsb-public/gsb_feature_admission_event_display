(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {

      var height = $("div.views-exposed-widgets").height();
      var width = $("div.views-exposed-widgets").width();
      $('div.container-inline-date :input').change(function(e) {
        overlay_div = '<div id="let-ajax-alone" style="height:' + height + 'px;width:' + width + 'px; position:absolute; margin-bottom:-' + height + 'px;margin-right:-' + width + 'px;z-index:999;"></div>';
        $('div.views-exposed-widgets').prepend(overlay_div);
      });
      

    }
};

})(jQuery);

