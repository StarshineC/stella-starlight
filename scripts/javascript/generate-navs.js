const DOM_NAV = {
    head: document.querySelector("header"),
    foot: document.querySelector("footer")
}

let popNav = false;



function generateNavs(rePath = pathOffset) {

    // -=-=-= Nav / Futaba Bar =-=-=- //
    DOM_NAV.head.insertAdjacentHTML("afterbegin", `
    <article>
        <section id="nav-desktop">
            <img id="main-logo" onclick="windowLink('${rePath}index.html')" src="${rePath}media/images/icons/logo.png" alt="Stella Starlight">
            <nav>
                <button onclick="windowLink('${rePath}gallery.html')">Gallery</button>
                <button onclick="windowLink('${rePath}music.html')">Music</button>
                <button onclick="windowLink('${rePath}more.html')">More</button>
            </nav>
            <div id="side-buttons">
                <button>Mute</button>
                <button>Return</button>
                <button>Stars</button>
            </div> 
        </section>

        <section id="nav-mobile">
            <img id="main-logo" onclick="windowLink('${rePath}index.html')" src="${rePath}media/images/icons/logo.png" alt="Stella Starlight">
            <button onClick = "togglePop();">More Stuff!</button>
            <div id="pop-nav">
                <nav>
                    <button onclick="windowLink('${rePath}gallery.html')">Gallery</button>
                    <button onclick="windowLink('${rePath}music.html')">Music</button>
                    <button onclick="windowLink('${rePath}more.html')">More</button>
                </nav>
                <div id="pop-side-buttons">
                    <p>Mu</p>
                    <p>Re</p>
                    <p>St</p>
                </div>
            </div>
        </section>
    </article>
    <div id="pop-block" onclick = "closePop();"></div>
    `);

    // -=-=-= Footer it's just the Footer =-=-=- //
    DOM_NAV.foot.insertAdjacentHTML("afterbegin", `
        <article>
            <section id="footer-internal">
                <h1>Explore Stella Quickly</h1>
                <button onclick="windowLink('${rePath}index.html')">Home</button>
                <button onclick="windowLink('${rePath}gallery.html')">Gallery</button>
                <button onclick="windowLink('${rePath}music.html')">Music</button>
                <button>Character Profiles</button>
                <button>Credits</button>
                <button onclick="windowLink('${rePath}more.html')">More</button>
            </section>
            <section id="footer-external">
                <h1>Travel Elsewhere</h1>
                <button>Tumblr (Stella)</button>
                <button>Webtoon (Stella)</button>
                <button>Tapas (Stella)</button>
                <button>Tumblr (StarshineC)</button>
                <button>Youtube (StarshineC)</button>
            </section>
            <section id="footer-copyright">
                <h1>Starshine C.</h1>
                <p>Copyright © 2022-2024 Starshine C. All Rights Reserved</p>
            </section>
        </article>
    `);
        
}


// Toggles the Popup Nav in the Mobile View.
function togglePop() {
    popNav = !popNav;
    console.log(popNav) // Testy
    if (popNav) {
        document.querySelector("#pop-nav").style = "transform: rotate(0deg) translate(0px);";
        document.querySelector("#pop-block").style = "width: max(160vh, 160vw); height: max(160vh, 160vw);";
    } else {
        closePop();
    }
}

function closePop() {
    document.querySelector("#pop-nav").style = "transform: rotate(90deg) translate(-100px);";
    document.querySelector("#pop-block").style = "width: 0%; height: 0%;";
    popNav = false;
}


let windowThen = window.scrollY;
window.onscroll = function() {
    let windowNow = window.scrollY;
    if (windowThen > windowNow) {
        DOM_NAV.head.style.top = "0px";
    }
    else if (windowNow > 80) {
        DOM_NAV.head.style.top = "-80px";
    }
    windowThen = window.scrollY;
    closePop();
}