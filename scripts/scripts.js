function forceNumeric(){
    var $input = $(this);
    $input.val($input.val().replace(/[^\d.]+/g,''));
}

function forceMinMax(obj, min, max){
    obj.val(Math.min(Math.max(obj.val(), min), max));
}

$('body').on('propertychange input', 'input[type="text"]', forceNumeric);



$("#date").keyup(function(event) {
    var value = $(this).val();
    if (event.keyCode !== 8 && value.indexOf(".") === value.lastIndexOf(".")) {
        if (value.length > 2 && value[2] != ".") {
            value = value.substring(0, 2) + "." + value.substring(2);
        } 

        if (value.length > 5 && value[5] != ".") {
            value = value.substring(0, 5) + "." + value.substring(5);
        }
    }
    $(this).val(value);
});


$("#date").datepicker($.datepicker.regional["ru"]);


/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.ru = {
	closeText: "Закрыть",
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
	currentText: "Сегодня",
	monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
	"Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
	monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
	"Июл","Авг","Сен","Окт","Ноя","Дек" ],
	dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
	dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
	dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
	weekHeader: "Нед",
	dateFormat: "dd.mm.yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.ru );

return datepicker.regional.ru;

} ) );


$("#deposit_sum_slider").slider({
    animate : "slow",
    min : 1000,
    max : 3000000,
    value : 10000,
    step : 100,
    slide: function( event, ui ) { 
        $("#deposit_sum").val(ui.value)
    }
});
$("#deposit_sum").val($("#deposit_sum_slider").slider("value"))


$("#replenishment_sum_slider").slider({
    animate : "slow",
    min : 1000,
    max : 3000000,
    value : 10000,
    step : 100,
    slide: function( event, ui ) { 
        $("#replenishment_sum").val(ui.value)
    }
});
$("#replenishment_sum").val($("#replenishment_sum_slider").slider("value"))



$("#deposit_sum").change('input', function(){
    forceMinMax($("#deposit_sum"), 1000, 3000000);
    $("#deposit_sum_slider").slider("option", "value", $("#deposit_sum").val());

});

$("#replenishment_sum").change('input', function(){
    forceMinMax($("#replenishment_sum"), 1000, 3000000);
    $("#replenishment_sum_slider").slider("option", "value", $("#replenishment_sum").val());


});
