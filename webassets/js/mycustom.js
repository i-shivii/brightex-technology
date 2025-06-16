  function disclaimer_form_validate() {

      //  alert('yes');

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;
      var usrotp = document.getElementById("usrotp").value;
      var state = document.getElementById("state").value;
      var agree = document.getElementById("agree").value;

      if (name == '' || name == null) {
          alert("Please enter name");
          $("#name").focus();
          return false;
      }

      if (email == '' || email == null) {
          alert("Please enter email");
          $("#email").focus();
          return false;
      }

      if (mobile == '' || mobile == null) {
          alert("Please enter 10 digit mobile number");
          $("#mobile").focus();
          return false;
      }

      if (state == '' || state == null) {
          alert("Please Select State");
          $("#state").focus();
          return false;
      }

      if ($('#agree').is(':checked')) {} else {
          alert('Please Agree');
          return false;
      }

      //if(usrotp != ''){

      if (mobile.length >= 10) {
          // alert(mobile); 
          var url = site_url + 'Home/sendotp';
          $.ajax({
              url: url,
              type: "POST",
              data: {
                  'email': email,
                  'mobile': mobile,
                  'name': name
              },
              dataType: "json",
              success: function(res) {

                  if (res.success == true) {
                      alert(res.msg);
                      $("#otpdiv").css('display', 'block');
                      $("#send_div").css('display', 'none');
                      $("#submit_div").css('display', 'block');
                  } else {
                      $("#otpdiv").hide();
                      alert(res.msg);
                  }
              }
          });
      }
      // }  
  }

  $('body').on('click', '#submit_disclaimer_form', function() {

      // disclaimer_form_validate();

      var usrotp = document.getElementById("usrotp").value;
      if (usrotp == '' || usrotp == null) {
          alert("Please enter OTP to proceed");
          $("#usrotp").focus();
          return false;
      }

      var url = site_url + "Home/submit_disclaimer";

      $.ajax({
          url: url,
          type: "POST",
          data: $("#disclaimer_form").serialize(),
          dataType: "json",
          success: function(result) {
              if (result.success == true) {
                  // alert(result.msg);
                  //alert('hello');
                  $('#disclaimer_form')[0].reset();
                  //$('#disclaimer_form').reset();
                  location.reload(true);
              } else if (result.success == false) {
                  alert("Something Went Wrong");
                  location.reload();
              }
          }
      });
  });


  $('body').on('click', '#submit_get_disclaimer', function() {

      var dmobileno = document.getElementById("dmobileno").value;

      if (dmobileno == '' || dmobileno == null) {
          alert("Please enter 10 digit mobile number");
          $("#dmobileno").focus();
          return false;
      }
      if (dmobileno.length != 10) {
          alert("Please enter 10 digit mobile number");
          $("#dmobileno").focus();
          return false;
      }

      var url = site_url + "Home/get_disclaimer";

      $.ajax({
          url: url,
          type: "POST",
          data: $("#get_disclaimer_form").serialize(),
          dataType: "json",
          success: function(result) {
              if (result.success == true) {
                  //alert(result.msg);
                  $('#get_disclaimer_form')[0].reset();
                  location.reload(true);
              } else if (result.success == false) {
                  alert("Something Went Wrong");
              }
          }
      });
  });


  $('body').on('click', '#submit_get_websitelink', function() {

      var wmobileno = document.getElementById("wmobileno").value;

      if (wmobileno == '' || wmobileno == null) {
          alert("Please enter 10 digit mobile number");
          $("#wmobileno").focus();
          return false;
      }
      if (wmobileno.length != 10) {
          alert("Please enter 10 digit mobile number");
          $("#wmobileno").focus();
          return false;
      }

      var url = site_url + "Home/get_website_link";

      $.ajax({
          url: url,
          type: "POST",
          data: $("#get_websitelink_form").serialize(),
          dataType: "json",
          success: function(result) {
              if (result.success == true) {
                  // alert(result.msg);
                  $('#get_websitelink_form')[0].reset();
                  location.reload(true);
              } else if (result.success == false) {
                  alert("Something Went Wrong");
              }
          }
      });
  });

  $('body').on('click', '#submit_get_banksitelink', function() {

      var wmobileno = document.getElementById("bankmobileno").value;

      if (wmobileno == '' || wmobileno == null) {
          alert("Please enter 10 digit mobile number");
          $("#bankmobileno").focus();
          return false;
      }
      if (wmobileno.length != 10) {
          alert("Please enter 10 digit mobile number");
          $("#bankmobileno").focus();
          return false;
      }

      var url = site_url + "Home/get_banksite_link";

      $.ajax({
          url: url,
          type: "POST",
          data: $("#get_bwebsitelink_form").serialize(),
          dataType: "json",
          success: function(result) {
              if (result.success == true) {
                  // alert(result.msg);
                  $('#get_bwebsitelink_form')[0].reset();
                  location.reload(true);
              } else if (result.success == false) {
                  alert("Something Went Wrong");
              }
          }
      });
  });

  // our-partners slider

  $(document).ready(function() {
      $('.st-our-partners .owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,

          autoplay: true,
          autoplayTimeout: 1000,

          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 3
              },
              1000: {
                  items: 3
              }
          }
      })
  })