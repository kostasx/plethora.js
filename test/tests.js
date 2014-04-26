test('iterate', function() {

    var object = { a:1, b:2 }
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

    deepEqual( $p.iterate( object, callback ), { a: 1, b: 2 }, 'Extract object properties names and values');
    deepEqual( $p.iterate( child, callback ), { c: 3, d: { e:5, f:6 } }, 'Extract an object\'s own properties names and values' );
    deepEqual( $p.iterate( child, callback, false ), { a: 1, b: 2, c: 3, d: { e:5, f:6 } }, 'Extract own and inherited properties names and values');
    deepEqual( $p.iterate( extended, callback ), { text: "Hello!", arr: [1,2,3], bool: false }, 'Deep array and object nesting');
    deepEqual( $p.iterate( extended, callback, false ), { a: 1, b: 2, c: 3, d: { e:5, f:6 }, text: "Hello!", arr: [1,2,3], bool: false }, 'Deep array and object nesting including inherited properties');

});