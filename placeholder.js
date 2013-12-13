$(function() {
  $('.placeholder').focus(function() {
    if (this.value === this.title){
      this.value = "";
      $(this).addClass('active');
    }
  }).blur(function() {
    if (!this.value){
      this.value = this.title;
      $(this).removeClass('active');
    }
  }).trigger('blur');        

  if('object' === typeof Widget && 'function' === typeof Widget.CSS){
    Widget.CSS([
        '.placeholder { color: #666; }',
        '.placeholder.active { color: #111; }'
    ].join(' '));
  }
});
