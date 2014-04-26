(function(){

	var $_ = {};

	$_.iterate = $_.itr = function ( object, callback, own ){

		if ( !callback ) throw new Error("You must provide a callback function.");

		own = ( own !== false );

		var key;
		var hasOwnProp = Object.prototype.hasOwnProperty;

		for ( key in object ) {

			if ( 'object' === typeof object[key] ){

				$_.iterate( object[key], callback, own );

				continue;

			}

			if ( own ) {

				if ( hasOwnProp.call(object, key) ){

					callback( key, object[key] );

				}


			} else {

				callback( key, object[key] );

			}

		}

	}

	this.plethora = this.$_ = $_;

}).call(this);
