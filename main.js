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
	this.overrideGameManager();

	function getAutoMoveFn() {
		var direction = 0;

		return function() { 
			manager.move(direction); 
			direction++; 
			if( direction === 4 ) {
				direction=0;
			} 
		}
	}

	setInterval( getAutoMoveFn(), 0 );
}


Automator.prototype.overrideGameManager = function() {
	manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
}


Automator.prototype.cleanUp = function() {
	console.log( "Cleaning up Automator" );
}


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