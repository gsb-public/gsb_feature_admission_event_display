(function ($) {

  Drupal.behaviors.gsb_feature_admission_event_display = {
    attach: function (context, settings) {
      $(function() {
        $("#edit-date-search-value-datepicker-popup-0").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: new Date(),
        maxDate: "+3y",
        dateFormat: "M dd yy"
        });
      // $("#edit-date-search-value-datepicker-popup-0").datepicker({ minDate: new Date() });
        $("#edit-field-event-date-value-value-datepicker-popup-0").datepicker({
          changeMonth: true,
          changeYear: true,
          minDate: new Date(),
          maxDate: "+3y",
          dateFormat: "M dd yy"
        });
      // $("#edit-field-event-date-value-value-datepicker-popup-0").datepicker({ minDate: new Date() });
      });
      if ($("#edit-date-search-value-datepicker-popup-0").val() == "" ){
        var start_date = $.datepicker.formatDate('M dd yy', new Date());
        $("#edit-date-search-value-datepicker-popup-0").val(start_date);
        $('#ui-datepicker-div').hide();
        $("#edit-date-search-value-datepicker-popup-0").change();
      }
      if ($("#edit-field-event-date-value-value-datepicker-popup-0").val() == ""){
        var date = new Date();
        var end_date=(date.getMonth()+1) + "/" + date.getDate() + "/" + (date.getFullYear() + 1);
        $("#edit-field-event-date-value-value-datepicker-popup-0").val($.datepicker.formatDate('M dd yy', new Date(end_date)));
        $('#ui-datepicker-div').hide();
        $("#edit-field-event-date-value-value-datepicker-popup-0").change();
      }
      var height = $("div.views-exposed-widgets").height();
      var width = $("div.views-exposed-widgets").width();
      $('div.container-inline-date :input').change(function(e) {

        overlay_div = '<div id="let-ajax-alone" style="height:' + height + 'px;width:' + width + 'px; position:absolute; margin-bottom:-' + height + 'px;margin-right:-' + width + 'px;z-index:999;"></div>';
        $('div.views-exposed-widgets').prepend(overlay_div);
      });
    }
};

})(jQuery);

