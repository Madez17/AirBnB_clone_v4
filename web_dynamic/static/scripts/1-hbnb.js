window.addEventListener('load', function () {
  let list = {}
  $( "input[type=checkbox]" ).on( "click");
     if($(this).is(":checked")) {
       list[$(this).attr("data_id")] = $(this).attr("amenity_id")
     } else {
       delete list[$(this).attr("data_id")]
     }
     const saveName = []
     for name in list {
       $('.amenities h4').text(list.join(', '));
     }
     
 });
