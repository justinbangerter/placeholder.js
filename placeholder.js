$(function() {
  //Feature detection: skip if feature is already supported
  if ('placeholder' in document.createElement('input')) return;

  //Setup the triggers
  $('input[placeholder]').focus(function() {
    if (this.value === this.placeholder) {
      this.value = "";
      $(this).addClass('active');
    }
  }).blur(function() {
    if (!this.value) {
      this.value = this.placeholder;
      $(this).removeClass('active');
    }
  }).trigger('blur');        

  //Only inject css if library is available 
  try {
    Widget.CSS([
        'input[placeholder]        { color: #666; }',
        'input[placeholder].active { color: #111; }'
    ].join(' '));
  }
  catch (e) {
  }
});
