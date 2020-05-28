//add your code here
function runOnLoad () {
    $('h2').css('color','red');
}

// "listen" for the "DOMContentLoaded" event, and then run "runOnLoad()"
document.addEventListener('DOMContentLoaded', runOnLoad, false);
