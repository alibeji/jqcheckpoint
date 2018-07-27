
$("#dropbtn2").click(function() {
 $(".dropdown-content:first").toggleClass("show");
})
$("#dropbtn1").click(function() {
 $(".dropdown-content:odd").toggleClass("show");
})

$("#frale").click(function(){$("#txt").css("font-family","Raleway");})
$("#b2").click(function(){$("#txt").toggleClass("b");})
$("#flato").click(function(){$("#txt").css("font-family","Lato");})
$("#ftimes").click(function(){$("#txt").css("font-family","Roboto");})
$("#i").click(function(){$("#txt").toggleClass("i");})
$("#u").click(function(){$("#txt").toggleClass("u");})
$("#sizes").click(function(){$("#txt").css("font-size","12px")})
$("#sizem").click(function(){$("#txt").css("font-size","18px")})
$("#sizel").click(function(){$("#txt").css("font-size","30px")})