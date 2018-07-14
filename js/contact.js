$(document).ready(function() {

 	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$('#name')[0].addEventListener('input', function() {
		$("#required-name").css({'visibility':'hidden'});
	});
	// $('#organization')[0].addEventListener('input', function() {
	// 	$("#required-organization").css({'visibility':'hidden'});
	// });
	$('#email')[0].addEventListener('input', function() {
		$("#required-email").css({'visibility':'hidden'});
		validEmail = validateEmail($('#email')[0].value);
		if (validEmail) {
			$("#invalid-email").css({'visibility':'hidden'});	
		}
	});
	$('#message')[0].addEventListener('input', function() {
		$("#required-message").css({'visibility':'hidden'});
	});

$('#submit-button')[0].addEventListener('click', function(event) {
	event.preventDefault();
	valid = true
	$('.required').css({'visibility':'hidden'});

	if (!$('#name')[0].value) {	
		$("#name-wrapper").effect("shake");
		$("#required-name").css({'visibility':'visible'});
		valid = false
	}

	if (!$('#email')[0].value) {	
		$("#email-wrapper").effect("shake");
		$("#required-email").css({'visibility':'visible'});
		valid = false
	}
	else {
		console.log('validating: ' + $('#email')[0].value)
		validEmail = validateEmail($('#email')[0].value);
		if (!validEmail) {
			$("#email-wrapper").effect("shake");
			$("#invalid-email").css({'visibility':'visible'});
		}
		else {
			$("#invalid-email").css({'visibility':'hidden'});	
		}
		valid = validEmail;
	}

	// /* validate email format here */

	// if (!$('#organization')[0].value) {	
	// 	$("#organization").effect("shake");
	// 	$("#required-organization").css({'visibility':'visible'});
	// 	valid = false
	// }

	if (!$('#message')[0].value) {	
		$("#message-wrapper").effect("shake");
		$("#required-message").css({'visibility':'visible'});
		valid = false
	}

  if (valid) {
  	$('#form')[0].submit();
  	// document.getElementById('form').submit();
  }


});

    // $(".errBox").effect("shake");
 // $form = $("#form"); 
 //    $form.on("submit",function()
 //    {
 //       alert("submitting..");
 //       //do ajax
 //       $.ajax({
 //                 url:<submit url>,
 //                 type:post/get,
 //                 success:function() { alert("done");  }
 //             });
 //    });
 //     $form.submit();

});