$(function () {
  const dict = {};
  $('.amenities input').change(function () {
    if ($(this).is(':checked')) {
      dict[$(this).attr('data-name')] = $(this).attr('data-id');
    } else {
      delete dict[$(this).attr('data-name')];
    }
    const list = [];
    for (const key of Object.keys(dict)) {
      list.push(key);
    }
    if (list.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(list.join(', '));
    }
  });
});
