jQuery(document).ready(function() {
  jQuery('.show-form').click(function() {
    jQuery('.form').show('5000');
  });

  jQuery('.form-send').click(function() {
    var input_name = jQuery('.contact-form .form-input-name');
    var input_mail = jQuery('.contact-form .form-input-email');
    var input_message = jQuery('.contact-form .form-input-message');
    if (input_name.val() === "" || input_mail.val() === "" || input_message.val() === "") {
      alert('Empty value detected!');
      return false;
    }
  });
  
  jQuery('.form-cancel').click(function() {
    jQuery('.form').hide('5000');
  });

  jQuery('.button').click(function() {
    var ele = jQuery(this);

    if (ele.hasClass('about')) {
      scroll_to('about');
    }
    else if(ele.hasClass('services')) {
      scroll_to('services');
    }
    else if(ele.hasClass('contacts')) {
      scroll_to('contacts');
    }
  });

  function scroll_to(hhh) {
    var ele = jQuery('div.' + hhh);
    jQuery('html, body').animate({
      'scrollTop' : ele.offset().top - 30
    }, 1000);
  }
});


function initialize() {
  var myLatlng = new google.maps.LatLng(47.0142263,28.8452091);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'IPGroup!'
  });
  var pc = new google.maps.LatLng(47.0190774,28.8432535);
  new google.maps.Marker({
    position: pc,
    map: map,
    title: 'Piata centrala!'
  });
  var pc2 = new google.maps.LatLng(47.0188309,28.8367467);
  new google.maps.Marker({
    position: pc2,
    map: map,
    title: 'Department1'
  });
  var pc3 = new google.maps.LatLng(47.0120309,28.8367467);
  new google.maps.Marker({
    position: pc3,
    map: map,
    title: 'Department2'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

