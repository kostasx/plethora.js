plethora.js
===========

JavaScript Utilities Library
______

## Usage:

```html
<script src="plethora.js"></script>
```

### Iterate over an object's properties

```js
var object = { a:1, b:2 }
var x = Object.create( object );
    x.c = 3;
	  x.d = { e:05, f:06 };

// Iterate over object's own properties
$_.iterate( x, check );

// Iterate over all propeties, including inherited ones.
$_.iterate( x, check, false );

// Callback function
function check(key, value){
	console.log( key + ":" + value );
}
```
