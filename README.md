# dsw-utilities

This is a collection of utilities that our team has found useful.

### overflow-check
*Author: Sean Duffy*

Traverses a web page to determine elements that are more than a certain width.

#### Uses:
checkDimensions(window.innerWidth, []);
* Returns any elements that are wider than the width of the window.  Good for horizontal scrolling issues.  
 