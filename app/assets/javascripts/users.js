//Send card info to Stripe
//Handle Stripe's response (which includes token)

//Wait for turbolinks to load, instead of document ready
$(document).on('turbolinks:load', function(){
  /* global $, Stripe */
  //Select the form and submit button
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  //Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  submitBtn.click(function(event){
    //When user clicks form submit btn
    //prevent default submission behavior.
    event.preventDefault();
    submitBtn.val("Processing").prop('disabled', true);
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    
    //Use Stripe JS library to check for errors.
    var error = false;
    
    //Validate card number
    if(!Stripe.card.validateCardNumber(ccNum)) {
      error = true;
      alert('The credit card number appears to be invalid.');
    }
    
    //Validate CVC number
    if(!Stripe.card.validateCVC(cvcNum)) {
      error = true;
      alert('The CVC number appears to be invalid.');
    }
    
    //Validate expiration date
    if(!Stripe.card.validateExpiry(expMonth, expYear)) {
      error = true;
      alert('The expiration date appears to be invalid.');
    }
    
    if (error) {
      submitBtn.prop('disabled', false).val("Sign Up");
    } else {
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
  });
});