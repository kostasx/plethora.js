plethora.js
===========

JavaScript Utilities Library
______

## Usage:

```html
<script src="plethora.js"></script>
```

### .iterate( object, callback [,own] )

*Object Iterator Function*

```js
var object = { a:1, b:2 }
var x = Object.create( object );
    x.c = 3;
    x.d = { e:5, f:6 };

// Iterate over object's own properties
$p.iterate( x, check );

// Iterate over all propeties, including inherited ones.
$p.iterate( x, check, false );

// Callback function
function check(key, value){
	console.log( key + ":" + value );
}
```
