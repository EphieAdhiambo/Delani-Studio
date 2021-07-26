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
    $("#work4").mouseover(function(){
    $("#layer1").show();
     });
    $("#work4").mouseout(function(){
    $("#layer1").hide();
    });
  

  $("#work3").mouseover(function(){
      $("#layer2").show();
    })
    $("#work3").mouseout(function(){
      $("#layer2").hide();
    });
   
    $("#work2").mouseover(function(){
      $("#layer3").show();
    })
    $("#work2").mouseout(function(){
      $("#layer3").hide();
    });
    
    $("#work1").mouseover(function(){
      $("#layer4").show();
    })
    $("#work1").mouseout(function(){
      $("#layer4").hide();
    });
    
    $("#work5").mouseover(function(){
      $("#layer5").show();
    })
    $("#work5").mouseout(function(){
      $("#layer5").hide();
    });
      
    $("#work6").mouseover(function(){
      $("#layer6").show();
    })
    $("#work6").mouseout(function(){
      $("#layer6").hide();
    });
     
    $("#work7").mouseover(function(){
      $("#layer7").show();
    })
    $("#work7").mouseout(function(){
      $("#layer7").hide();
    });
    
    $("#work8").mouseover(function(){
      $("#layer8").show();
    })
    $("#work8").mouseout(function(){
      $("#layer8").hide();
    });
});

function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
         var message = document.getElementById("comment").value;
 if (email !== "" && name !== "" && message !== "") {
   alert(
     "Thank you,we have received your message."
   );
 } else if (email == "" || name !== "" || message !== "") {
   alert("Put in your details below");
 }
}