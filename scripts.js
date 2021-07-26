$(document).ready(function(){
    $("#design-image").click(function(){
       $("#design-image").slideDown('1500').hide('1000');
       $("#design").show('1500');
        });
        $("#design").click(function(){
       $("#design").slideUp('1500');
       $("#design-image").slideDown('1500');
    });
   });
// $(document).ready(function(){
//  $(".design-icon").click(function(){
//      $(".design-icon").slideToggle('2500');
//      $(".Design").slideToggleShow('2500');
//  });
// $(".Design").click(function(){
//     $(".Design").slideToggle('2500');
//     $(".design-icon").slideToggle('2500');
// });
// });

$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });


$(document).ready(function(){
    $("#work").mouseover(function(){
    $("#mouseenter").show();
     });
    $("#work").mouseout(function(){
    $("#mouseenter").hide();
    });
  

  $("#work1").mouseover(function(){
      $("#mouseenter1").show();
    })
    $("#work1").mouseout(function(){
      $("#mouseenter1").hide();
    });
   
    $("#work2").mouseover(function(){
      $("#mouseenter2").show();
    })
    $("#work2").mouseout(function(){
      $("#mouseenter2").hide();
    });
    
    $("#work3").mouseover(function(){
      $("#mouseenter3").show();
    })
    $("#work3").mouseout(function(){
      $("#mouseenter3").hide();
    });
    
    $("#work4").mouseover(function(){
      $("#mouseenter4").show();
    })
    $("#work4").mouseout(function(){
      $("#mouseenter4").hide();
    });
      
    $("#work5").mouseover(function(){
      $("#mouseenter5").show();
    })
    $("#work5").mouseout(function(){
      $("#mouseenter5").hide();
    });
     
    $("#work6").mouseover(function(){
      $("#mouseenter6").show();
    })
    $("#work6").mouseout(function(){
      $("#mouseenter6").hide();
    });
    
    $("#work7").mouseover(function(){
      $("#mouseenter7").show();
    })
    $("#work7").mouseout(function(){
      $("#mouseenter7").hide();
    });
});

function myMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
         var message = document.getElementById("comment").value;
 if (email !== "" && name !== "" && message !== "") {
   // document.getElementById("pop").innerHTML =
   alert(
     "Hello" +
       " " +
       name +
       " we have received your message. Thank you for reaching out to us."
   );
 } else if (email == "" || name !== "" || message !== "") {
   alert("Please fill in all the details");
 }
}