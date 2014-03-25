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
		var randomPushCounter = 1;
		var pattern = [0,1,0,2]

		return function() {		
			if( _this.isDisabled ) 
				return;
			// every nth move, go up twice
			if(randomPushCounter % 50 == 0 && (direction == 1 || direction == 3)){
				//direction -= 1;
			}
			manager.move(pattern[direction]); 
			direction++;
			randomPushCounter++;
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