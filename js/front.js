$("#contactForm").submit(function(event){
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    //contact form verification
    if (!name.value || !email.value || !message.value) {
      alertify.error("Please make sure Form is completed");
    } else {
      event.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message Sent");
    }

  //insert EmailTo stuff
  Email.send("from@you.com",
    "to@them.com",
    "This is a subject",
    "this is the body",
    "smtp.yourisp.com",
    "username",
    "password");

  }
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
}
