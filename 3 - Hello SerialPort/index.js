var config = require( './config.json' ), // cf config.json file
    SerialPort = require( 'serialport' );
var parserline = new SerialPort.parsers.Readline( '\n' );

// initialize serialPort using port ( "COM3" ) and baud rate ( 9600 ) from config.json file
var serialPort = new SerialPort( config.serialPort, {
    baudRate: config.serialRate,
    parser: parserline
} );

// Serial communication between Node Server and Arduino
serialPort.on( 'open', function () {
    console.log( config.serialPort + ' open' );

    serialPort.on( 'data', function( data ) {
        console.log( 'data received: ' + data );
    } );
} );
