console.log('working');

// let changeIcon = function(icon){
//     icon.classlist.toggle()
// }


$(document).ready(function(){
     $("#menu__icon").click(function(){
       $(".menu-side-bar-container").toggle();
     });
   });

   function myFunction(x){
    x.classList.toggle("change");
   }

  // $("#menu__icon").click(function(){
  //   $("#menu-side-bar").show();
  // });