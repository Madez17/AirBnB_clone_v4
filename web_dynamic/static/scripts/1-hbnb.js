window.addEventListener('load', function () {
  let list = {}
  $( "input[type=checkbox]" ).on( "click");
     if($(this).is(":checked")) {
       list[$(this).attr("data_id")] = $(this).attr("amenity_id")
     } else {
       $(list).remove('data_id')
     }
     $('<li>' + list + '</li>').appendTo('h4');
 });
