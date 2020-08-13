$(function(){
    var colors = ["#0081FE", "#C86E4C", "#2BD566", "#513E78"];

    // Set background color programatically for each button
    $("#color-select a").each(function(index){
        $(this).css("background-color", colors[index]);
        $(this).css("box-shadow", "0 0 10px 5px " + colors[index])
    });

    // Introduction screen animation
    // setTimeout(function(){
    //     $("#intro-screen").fadeIn(2000);
    // }, 1000);
    // setTimeout(function(){
    //     $("#intro-screen").fadeOut(2000, function(){
    //         $("#color-select").fadeIn(2000);
    //     });
    // }, 5000);
    $("#color-select").fadeIn(2000);

    // Color select screen handler
    $("#color-select a").click(function(e){
        e.preventDefault();
    });
    $("#color-select a").hover(function(e){
        $(this).css("box-shadow", "0 0 20px 20px " + colors[$("#color-select a").index(this)]);
    }, function(){
        $(this).css("box-shadow", "0 0 10px 5px " + colors[$("#color-select a").index(this)]);
    });
})