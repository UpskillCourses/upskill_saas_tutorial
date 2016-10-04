
//Use Stripe JS library to check for errors.
//Collect the credit card fields.
//Send card info to Stripe
//Handle Stripe's response (which includes token)

//Wait for turbolinks to load, instead of document ready
$(document).on('turbolinks:load', function(){
  //Select the form and submit button
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  submitBtn.click(function(event){
    //When user clicks form submit btn
    //prevent default submission behavior.
    event.preventDefault();
    
    //Get the card inputs
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
  });
});