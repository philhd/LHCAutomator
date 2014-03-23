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
	
}


Automator.prototype.cleanUp = function() {
	console.log( "Cleaning up Automator" );

	this.stopAutoWoot();
	this.stopAutoSkip();
	
	this.isDisabled = true;
	
	$("#zectWasHere").remove();
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