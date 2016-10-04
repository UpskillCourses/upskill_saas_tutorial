//When user clicks form submit btn
//prevent default submission behavior.
//Use Stripe JS library to check for errors.
//Collect the credit card fields.
//Send card info to Stripe
//Handle Stripe's response (which includes token)

$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
});