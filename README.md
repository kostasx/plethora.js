plethora.js
===========

JavaScript Utilities Library

Version: 0.1.0 (beta)
______

## Usage:

```html
<script src="plethora.js"></script>
```

### .forEach( object, callback [,own] )

*Object Iterator Function*

```js
var object = { a:1, b:2 }
var x = Object.create( object );
    x.c = 3;
    x.d = { e:5, f:6 };

// Iterate over object's own properties
$p.forEach( x, check );

// Iterate over all propeties, including inherited ones.
$p.forEach( x, check, false );

// Callback function
function check(key, value){
	console.log( key + ":" + value );
}
```
