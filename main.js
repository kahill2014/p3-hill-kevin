$(function(){
    var colors = [];
    colors["blue"] = "#0081FE";
    colors["orange"] = "#C86E4C";
    colors["green"] = "#2BD566";
    colors["purple"] = "#513E78";
    var colorValues = Object.values(colors);
    var keyValues = Object.keys(colors);

    // Set background color programatically for each button
    $("#color-select a").each(function(index){
        $(this).css("background-color", colorValues[index]);
        $(this).css("box-shadow", "0 0 10px 5px " + colorValues[index])
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
        var tempThis = this;

        $("#color-select").fadeOut(1000, function(){
            var colorStringLength = keyValues[$("#color-select a").index(tempThis)].length;

            var changeColor = setInterval(function(){
                $("body").css("background-color", getRandomColor());
                colorStringLength--;

                if(colorStringLength == 0){
                    $("body").css("background-color", colorValues[$("#color-select a").index(tempThis)]);
                    clearInterval(changeColor);
                    $("#number-select").fadeIn(2000);
                }
            }, 1000);
        });
    });

    $("#number-select a").click(function(e){
        e.preventDefault();

        $("number-select").fadeOut(1000, function(){
            // Do something when number selected
        });
    });

    // Increase blur when hovering over a color
    $("#color-select a").hover(function(e){
        $(this).css("box-shadow", "0 0 20px 20px " + colorValues[$("#color-select a").index(this)]);
    }, function(){
        $(this).css("box-shadow", "0 0 10px 5px " + colorValues[$("#color-select a").index(this)]);
    });

    // Source: https://stackoverflow.com/questions/1484506/random-color-generator
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
})