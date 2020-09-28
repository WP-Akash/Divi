// Number One
How To Make Accordion Module Tabs Closable And Change Icon On WordPress Using The Divi Theme
Add Jquery Code & Publish

<script>
jQuery(function($){
 $('.et_pb_toggle_title').click(function(){
  var $toggle = $(this).closest('.et_pb_toggle');
  if (!$toggle.hasClass('et_pb_accordion_toggling')) {
   var $accordion = $toggle.closest('.et_pb_accordion');
   if ($toggle.hasClass('et_pb_toggle_open')) {
    $accordion.addClass('et_pb_accordion_toggling');
    $toggle.find('.et_pb_toggle_content').slideToggle(700, function() { 
     $toggle.removeClass('et_pb_toggle_open').addClass('et_pb_toggle_close');

    });
   }
   setTimeout(function(){ 
    $accordion.removeClass('et_pb_accordion_toggling'); 
   }, 750);
  }
 });
});
</script>

Add CSS Code & Publish
Now, we can add this code 

.et_pb_toggle_open .et_pb_toggle_title:before {
display: block !important;
content: "\e04f";
}

 // Number two
How To Make All Accordions Closed By Default Using The Divi Theme

<script>
jQuery(function($){
    $('.et_pb_accordion .et_pb_toggle_open').addClass('et_pb_toggle_close').removeClass('et_pb_toggle_open');
    $('.et_pb_accordion .et_pb_toggle').click(function() {     
      $this = $(this);
      setTimeout(function(){
      $this.closest('.et_pb_accordion').removeClass('et_pb_accordion_toggling');
},700);
    });
});
</script>

// NUmber Three

How To Edit & Change The Default Blue Color Bar On Divi Mobile Menu
.et_mobile_menu {
border-top: 3px solid #ff0000 !important;
}
<a href="https://www.successwithwp101.com/divi-theme-tutorials/">Divi All </a>