'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isinteger = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-isinteger', function tests() {

	it( 'should export a function', function test() {
		expect( isinteger ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				isinteger( value );
			};
		}
	});

	it( 'should compute whether each array element is an integer', function test() {
		var data, expected, actual;

		data = [ 5, 3.14, 3, -9, 1/0, 0, null, NaN ];

		expected = [ 1, 0, 1, 1, 0, 1, 0, 0 ];
		actual = isinteger( data );

		assert.deepEqual( actual, expected );
	});

});
