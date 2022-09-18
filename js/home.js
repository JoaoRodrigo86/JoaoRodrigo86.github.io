var holdingClick = false;

['mousedown', 'touchdown'].forEach( evt => document.addEventListener( evt, function (_event) { holdingClick = true; }, false ) );
['mouseup', 'touchup'].forEach( evt => document.addEventListener( evt, function (_event) { holdingClick = false; }, false ) );




function clickHue(hue) {
    if ( holdingClick ) {
        document.querySelector('.picked-hue').classList.remove('picked-hue');
        document.body.style.setProperty('--accent-color', `hsl(${hue},97%,53%)`);
        document.getElementById(`hue-${hue}`).classList.add('picked-hue');
        sessionStorage.setItem('theme', hue);
        document.body.classList.remove('ee1');
    }

    if ( hue === 30 ) {
        setTimeout( function () {
            ee1();
        }, 5000);
    }
}

function ee1() {
    if ( document.getElementById(`hue-30`).classList.contains('picked-hue') ) {
        document.body.style.setProperty('--accent-color', `hsl(30,100%,28%)`);
        document.body.classList.add('ee1');
    }
}