$("#contactForm").submit(function(event){
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var firstName = $("#form_name").val();
    var lastName = $("#form_lastname").val();
    var email = $("#form_email").val();
    var phone = $("#form_phone").val();
    var message = $("#form_message").val();

    //contact form verification
    if (!form_name.value || !form_lastname.value || !form_email.value ||
      !form_phone.value || !form_message.value) {
        
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
