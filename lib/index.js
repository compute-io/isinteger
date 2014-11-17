/**
*
*	COMPUTE: isinteger
*
*
*	DESCRIPTION:
*		- Computes for each array element whether an element is an integer.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// ISINTEGER //

/**
* FUNCTION: isinteger( arr )
*	Computes for each array element whether an element is an integer.
*
* @param {Array} arr - input array
* @param {Array} array of 1s and 0s indicating if an element is an integer
*/
function isinteger( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'isinteger()::invalid input argument. Must provide an array.' );
	}
	var len = arr.length,
		out = new Array( len ),
		val;

	for ( var i = 0; i < len; i++ ) {
		out[ i ] = 0;
		val = arr[ i ];
		if ( typeof val === 'number' && val === val && val%1 === 0 ) {
			out[ i ] = 1;
		}
	}
	return out;
} // end FUNCTION isinteger()


// EXPORTS //

module.exports = isinteger;
