test('iterate', function() {

    var x = {}; console.log(x);
    var object = { a:1, b:2 };
    var child = Object.create( object );
        child.c = 3;
        child.d = { e:5, f:6 };
    var extended = Object.create( child );
        extended.text = "Hello!";
        extended.arr  = [1,2,3];
        extended.bool = false;
    var result = {};
    var callback = function( key, value ){
        result[key] = value;
    }

    deepEqual( plethora.forEach( object, callback ), { a: 1, b: 2 }, 'Functional: Extract object properties names and values');
    deepEqual( plethora.forEach( child, callback ), { c: 3, d: { e:5, f:6 } }, 'Functional: Extract an object\'s own properties names and values' );
    deepEqual( plethora.forEach( child, callback, false ), { a: 1, b: 2, c: 3, d: { e:5, f:6 } }, 'Functional: Extract own and inherited properties names and values');
    deepEqual( plethora.forEach( extended, callback ), { text: "Hello!", arr: [1,2,3], bool: false }, 'Functional: Deep array and object nesting');
    deepEqual( plethora.forEach( extended, callback, false ), { a: 1, b: 2, c: 3, d: { e:5, f:6 }, text: "Hello!", arr: [1,2,3], bool: false }, 'Functional: Deep array and object nesting including inherited properties');

});