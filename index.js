//add your code here
function runOnLoad () {
  //$('h2').css('color','red');
  document.querySelectorAll('h2').forEach( h => h.style.color ='black')
}

// "listen" for the "DOMContentLoaded" event, and then run "runOnLoad()"
document.addEventListener('DOMContentLoaded', runOnLoad, false);
function runOnLoad () {
  $('h3').css('color', 'red');
 $('h2').css('color', 'rgb(200,40,20');
  document.querySelector('h2').style.color = '#cc35cc';
}

// "listen" for the "DOMContentLoaded" event, and then run "runOnLoad()"
document.addEventListener('DOMContentLoaded', runOnLoad, false);
