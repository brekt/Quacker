$(document).ready(function(){
  console.log('Ready!');
  //$('#signin').mouseenter(function(ee){
  //  ee.preventDefault();
  //  $('#signinform').slideDown('slow', function(){
  //    //animation complete
  //  });
  //});
  //$('#signinform').mouseleave(function(ee){
  //    ee.preventDefault();
  //    $(this).slideUp('slow', function(){
  //    //animation complete
  //  });
  //});

function dropdown(link, form){
    $(link).mouseenter(function(ee){
        ee.preventDefault();
        $(form).slideDown('slow', function(){
            //animation complete
        });
    });
    $(form).mouseleave(function(ee){
        ee.preventDefault();
       $(this).slideUp('slow', function(){
           //animation complete
       });
    });
}
dropdown('#signin', '#signinform');
dropdown('#signup', '#signupform');



});
