
let readerVolume = 1;
let readerChapter = 1;
let readerFormatStrip = false;



function _galleryPage() {
    return `
        <div>
            <img> <!-- Left Page -->
            <p></p> <!-- Left Number -->
            <img> <!-- Right Page -->
            <p></p> <!-- Right Number -->
        </div>
    `
}

function _galleryStrip() {
    return `
        <div>
            <img>
            <p></p>
        </div>
    `
}




// -=-=-= User Button Functions =-=-=-

function selectVolume(volumeNumber) {
    if (volumeNumber = "0") {
        // Change Volume to "Extras"
        // Remove "Volume Settings (Main Series)"
        // Reveal "Volume Settings (Extras)"
    } else {
        // Change Volume to the Corresponging Numberge
        // Reveal "Volume Settings (Main Series)"
        // Remove "Volume Settings (Extras)"
    }
}

function selectFormat() {
    readerFormatIsStrip = !readerFormatIsStrip;
    if (readerFormatIsStrip) {
        // Change Format to Strips
        // Change Chapter Select to Volume Select
    } else {
        // Change Format to Pages
    }
}

function selectChapter(step) {
    if (readerFormatStrip) {
        
    } else {

    }
}






// -=-=-= DoIt Functions =-=-=-

function _enableChapterSelect(object) {
    // Set Button Decoration to On
}

function _disableChapterSelect(object) {
    // Set Button Decoration to Off
}


// Selects a Gallery, and sets it
function _setGallery(volume, isStrip, chapter = 1) {
    if (isStrip) {
        // Sets a Strip Gallery based on the Volume
    } else {
        // Sets a Page Gallery based on the Volume and Chapter
    }
}