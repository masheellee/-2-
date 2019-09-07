// Проверка формы

function checkField( name, value ) {

    if (value == '') {
        name.css('border', '4px solid red');
        name.before('<div class="error">Заполните это поле</div>');
    } else {
        name.css('border', '4px solid orange');
        name.prev('.error').remove();
    }
}

let name = $('[name="name"]');
let email = $('[name="email"]');
let userName = $('[name="user-name"]');
let userEmail = $('[name="user-email"]');
let text = $('[name="user-message"]');

$('.form-up, .form-down').submit(function() {

    $('.error').remove();

    let nameVal = name.val();
	let emailVal = email.val();
	let userNameVal = userName.val();
    let userEmailVal = userEmail.val();
	let textVal = text.val();
	

    if ( nameVal == '' || emailVal == '' || userNameVal == '' || userEmailVal == '' || textVal == '' ) {
        
        checkField( name, nameVal );
		checkField( email, emailVal );
		checkField( userName, userNameVal );
        checkField( userEmail, userEmailVal );
        checkField( text, textVal );
        
        return false;
    }
    
});


$('input, textarea').keyup(function( event ) {

    $(this).prev('.error').remove();
    let nameVal = $(this).val();
    checkField( $(this), nameVal );
});



// STICKY MENU

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let menu = document.getElementById("menu");

// Get the offset position of the navbar
let sticky = menu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky-menu")
  } else {
    menu.classList.remove("sticky-menu");
  }
}


// Menu-button

$('.nav-button').click(function(){
    $('.nav').slideToggle();
});

$('.nav a').click(function(){
    $('.nav').slideToggle();
});


// Pagination
$(".bullets-item").click(function(){

    let num = $(".bullets-item").index( $(this) );

    $(".bullets-item").removeClass('active');
    $(".bullets-item").eq(num).addClass('active');
    
    counter = num;

    let left = (counter * -100) + '%';
    $('.slider').css('left', left);
});



