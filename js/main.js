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


$(window).scroll(function(){
    let pxToHeader = $('.menu').offset().top;
    if($(this).scrollTop() > pxToHeader) {
       $('.menu').addClass('sticky-menu');
    }else{
        // $('.menu').removeClass('sticky-menu');
    }
});

$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.arrow-up').fadeIn();
		} else {
			$('.arrow-up').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.arrow-up').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

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



