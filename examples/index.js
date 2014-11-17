'use strict';

var isinteger = require( './../lib' );

// Simulate some data...
var data = new Array( 100 ),
	len = data.length,
	rand;

for ( var i = 0; i < len; i++ ) {
	rand = Math.round( Math.random()*100 );
	if ( rand < 5 ) {
		rand += Number.EPSILON;
	}
	data[ i ] = rand;
}

var out = isinteger( data );

// Count the number of integer values detected...
var sum = 0;
for ( var i = 0; i < len; i++ ) {
	sum += out[ i ];
}

console.log( 'Count: %d', sum );
