//////////////////////////////////////////////////////////////////////////
// PlugDat - Some tools and fun stuff for plug.dj
//////////////////////////////////////////////////////////////////////////
//
// Main script!
/* ----------------------------------------------------------------------
													Object Structures
-------------------------------------------------------------------------
	
*/
//////////////////////////////////////////////////////////////////////////
// Constructor
function Automator() {
	console.log( "Constructing Automator" );
	
	// Setup our dashboard
	this.setupDashboard();
}


Automator.prototype.overrideGameManager = function() {
	window.requestAnimationFrame(function () {
		// Expose a global variable for our use later
		manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
	});
}


Automator.prototype.setupDashboard = function() {
	document.body.insertAdjacentHTML( 'beforebegin', '<div><p>This gets inserted.</p></div>' );
}


Automator.prototype.cleanUp = function() {
	console.log( "Cleaning up Automator" );
}

/*
function getBoardState() {
	var state = [];

	for( uint iRow=0; iRow<4; ++iRow )
		state[iRow] = [];

	var boardElements = document.getElementsByClassName('tile');
}*/


// -----------------------------------------------------------------
// Create or destroy ourselves depending on the current situation
// -----------------------------------------------------------------
if( document.Automator === undefined ) {
	console.log( "Creating Automator" );
	document.Automator = new Automator();
} else {
	console.log( "Destroying Automator" );
	document.Automator.cleanUp();
	document.Automator = undefined;
}
// -----------------------------------------------------------------