/*
 * This file is part of the Soletta Project
 *
 * Copyright (C) 2016 Intel Corporation. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var testUtils = require( "../assert-to-console" );

console.log( JSON.stringify( { assertionCount: 3 } ) );

var GPIO = require( "soletta/gpio" ),
    GPIOPin = null;

GPIO.open( {
    pin: 48,
    activeLow: false,
    pull: 0} )
.then(
    function ( pin ) {
        testUtils.assert( "ok", true, "GPIOPin init successfully" )
        GPIOPin = pin;
        GPIOPin.read().then(
            function( value ) {
                testUtils.assert( "ok", true, "GPIOPin.read can work fine" );
            },
            function( theError ) {
                testUtils.assert( "ok", false, "Could not run read method " + anError );
         } )
        GPIOPin.close().then(
            function () {
                testUtils.assert( "ok", true, "GPIOPin.close can work fine" );
            },
            function() {
                testUtils.assert( "ok", false, "Could not run close method " + anError );
            } )

} ).catch( ( error ) => {
    testUtils.assert( "ok", false, "Could not run open method of interface GPIO " + error );
} );
