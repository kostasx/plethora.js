(function(){

	"use strict";

	var version = '0.1.0';
	var plethora;

	plethora = function( object ) {
		if ( object instanceof plethora) return object;
		if ( !( this instanceof plethora ) ) return new plethora( object );
		this.$p_object = object;
	};

	plethora.forEach = plethora.fe = function forEachCb( object, callback, own ){

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
							_object[key] = plethora.forEach( object[key], callback, own );
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
	this.plethora = this.$p = plethora;

}).call( this );