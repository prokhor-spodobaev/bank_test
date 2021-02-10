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


$("#deposit_sum").change('input', function(e){
    forceMinMax($("#deposit_sum"), 1000, 3000000);
});

$("#replenishment_sum").change('input', function(e){
    forceMinMax($("#replenishment_sum"), 1000, 3000000);
});