$(function() {
  $('.placeholder').focus(function() {
    if (this.value === this.title) this.value = "";
  }).blur(function() {
    if (!this.value) this.value = this.title;
  }).trigger('blur');        

  if('object' === typeof Widget && 'function' === typeof Widget.CSS){
    Widget.CSS([
        '.placeholder { color: #666; }',
        '.placeholder:focus { color: #111; }'
    ].join(' '));
  }
});
