$(function() {
  $('.placeholder').focus(function() {
    if (this.value === this.title) this.value = "";
  }).blur(function() {
    if (!this.value) this.value = this.title;
  }).trigger('blur');        

  CSS([
      '.placeholder { color: #666; }',
      '.placeholder:focus { color: #111; }'
  ].join(' '));
});
