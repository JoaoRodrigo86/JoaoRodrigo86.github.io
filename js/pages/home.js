var holdingClick = false;

document.addEventListener( "mousedown", function (_event) { holdingClick = true; }, false );
document.addEventListener( "mouseup", function (_event) { holdingClick = false; }, false );

for (let i = 0; i < 255; i++) {
    let hueEl = document.getElementById(`hue-${i}`);
    [
        "touchstart"
    ].forEach( evt => {
        hueEl.addEventListener( evt, function ( _event ) {
            clickHue(i, true)
        }, false );
    });
}

document.addEventListener("touchmove", (event) => {
    var myLocation = event.touches[0];
    var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
    if (realTarget.dataset.component == 'color-picker-hue') {
        clickHue(realTarget.dataset.hue, true)
    }
});

function clickHue( hue, force = false ) {
    if ( !force && !holdingClick ) return;
    
    document.querySelector('.picked-hue').classList.remove('picked-hue');
    document.body.style.setProperty('--accent-color', `hsl(${hue},${SATURATION}%,${LIGHTNESS}%)`);
    document.getElementById(`hue-${hue}`).classList.add('picked-hue');
    sessionStorage.setItem('theme', hue);
    document.body.classList.remove('ee1');
    
    setBackground(hue)

    if ( hue === 30 ) {
        setTimeout( function () {
            ee1();
        }, 5000);
    }
}