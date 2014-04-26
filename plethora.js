(function(){

	"use strict";
	var plethora = $p = {};
	var version = '1.0.0';

	var $p = function( object ) {
		if ( object instanceof $p) return object;
		if ( !( this instanceof $p ) ) return new $p( object );
		this.$p_object = object;
	};

	$p.iterate = $p.itr = function ( object, callback, own ){

		if ( !callback ) throw new Error("You must provide a callback function.");
		own = ( own !== false );
		var _object = {};
		var key;
		var hasOwnProp = Object.prototype.hasOwnProperty;

		for ( key in object ) {
			if ( own ) {
				if ( hasOwnProp.call(object, key) ){
					if ( 'object' === typeof object[key] ){
						if ( ! object[key] instanceof Array ){
							_object[key] = $p.iterate( object[key], callback, own );
							continue;
						} else {
							_object[key] = object[key];
							continue;
						}
					} else {
						callback( key, object[key] );
						_object[key] = object[key];
					}
				}
			} else {
				callback( key, object[key] );
				_object[key] = object[key];
			}
		}
		return _object;
	}
	this.$p = $p;

}).call( this );