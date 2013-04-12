jQuery.toggleAttr
=================

Plugin for toggling (the value of) a HTML element attribute. This can be done with jQuery's *attr*, *removeAttr*, *prop* methods but I felt I wanted a cleaner way of doing this. The plugin is used by calling the *toggleAttr* method of a jQuery element. The method takes two arguments:

**The first argument** is the name of the attribute. Calling the *toggleAttr* method with only one argument will simply add or remove the attribute from the element.

**The second argument** is a single value or an array with several values for the attribute. Calling the *toggleAttr* method with two arguments where the second argument is a single value like a string or a number will add or remove the attribute for the HTML element. Calling the *toggleAttr* method with two arguments where the second argument is an array will cycle through the values in the array and update the attribute with the next value.

**Example code**
```javascript
// Simple toggle attribute
$('#myElement').toggleAttr('disabled');
$('#myElement').toggleAttr('disabled', 'disabled');

// Toggle two attribute values
$('#myElement').toggleAttr('aria-hidden', ['true', 'false']);

// Cycle several attribute values
$('#myElement').toggleAttr('value', ['A', 'B', 'C', 'D', 'E']);
```
