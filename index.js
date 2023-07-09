$(".weight-condition").hide();
$("#bmi").hide();
$(".invalid").hide();

$("#btn").click(function(){
    $(".invalid").hide();
    $(".weight-condition").show();
    $("#bmi").show();
    var height= $("#height").val()/100;
    var weight=$("#weight").val();
    var bmiValue = (weight/(height*height)).toFixed(2);
    $("#bmi").val(bmiValue);
    if (bmiValue < 18.5) {
        $(".condition").text("Under weight");
        $("#bmi").removeClass("good");
        $("#bmi").addClass("bad");
    } else if(bmiValue >= 18.5 && bmiValue <= 24.99 ){
        $(".condition").text("Normal weight, keep it up.");
        $("#bmi").removeClass("bad");
        $("#bmi").addClass("good");
    } else if(bmiValue >= 25 && bmiValue <= 29.99 ){
        $(".condition").text("Over weight");
        $("#bmi").removeClass("good");
        $("#bmi").addClass("bad");
    } else if(bmiValue >= 25 && bmiValue <= 29.99 ){
        $(".condition").text("Over weight");
        $("#bmi").removeClass("good");
        $("#bmi").addClass("bad");
    } 
    else{
        $(".invalid").show();
        $(".weight-condition").hide();
        $("#bmi").hide();
    }
})