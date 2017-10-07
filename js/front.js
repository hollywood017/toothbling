$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

  //insert js stuff
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
