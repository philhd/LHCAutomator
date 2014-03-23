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
	var _this = this;

	console.log( "Constructing Automator" );

	this.isDisabled = false;
	
	// Setup our dashboard
	this.overrideGameManager();

	function getMoveFn() {

		var direction = 0;

		return function() { 
			if( _this.isDisabled ) 
				return;

			manager.move(direction); 
			direction++; 
			if( direction === 4 ) {
				direction = 0;
			}
		}
	}

	setInterval( getMoveFn(), 0 );
}


Automator.prototype.overrideGameManager = function() {
	manager = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
}


Automator.prototype.cleanUp = function() {
	console.log( "Cleaning up Automator" );
	this.isDisabled = true;
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