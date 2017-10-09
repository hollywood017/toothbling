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
      $.ajax({
        url: "https://formspree.io/you@email.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });

      event.preventDefault();
      $(this).get(0).reset();
      alertify.success("Message Sent");
    }
  }
