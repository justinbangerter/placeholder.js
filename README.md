placeholder.js
==============

An extremely lightweight plugin that writes placeholder text into text fields

It requires either [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/) 
and has a soft dependency on [css.js](https://github.com/justinbangerter/css.js)

Example Use:

    <input placeholder="Your Placeholder Text Here"/>
    
If **css.js** is included, the text will be lightened when the box is not focused.
To override the colors or define them yourself, copy the following code into your
stylesheet and set the colors to what you desire.

    input[placeholder]        { color: #666 !important; }
    input[placeholder].active { color: #111 !important; }
