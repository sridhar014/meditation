$(document).ready(function() {
    let isBreathing = false;
    const breathingCircle = $("#breathing-animation");

    // Start/Stop Breathing Animation
    $("#start-breathing").click(function() {
        if (!isBreathing) {
            breathingCircle.addClass("breathing-animation");
            $(this).text("Stop Breathing Exercise");
        } else {
            breathingCircle.removeClass("breathing-animation");
            $(this).text("Start Breathing Exercise");
        }
        isBreathing = !isBreathing;
    });
});


