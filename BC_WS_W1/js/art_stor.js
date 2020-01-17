


//WHEN USER SCROLLS PAGE, EXECUTE stickyNav FUNCTION
window.onscroll = function(){stickyNav()};
//GET NAVROW CONTAINER
var navRow = document.getElementById("nav-row");
//GET OFFSET POSITION
var sticky = navRow.offsetTop;

// Add the sticky class to the NAVROW when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navRow.classList.add("sticky")
    } else {
      navRow.classList.remove("sticky");
    }
  }


//Footer dynamic year update
document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();


//Button to send an email from clients desktop email application.
//Couldn't figure out how to make it auto populate a subject line, but I DID get it to auto populate the email address
function sendMail() {
  var link = "mailto:cayton10@live.marshall.edu"
  escape(document.getElementById('email').value)
  ;

  window.location.href = link;
}



