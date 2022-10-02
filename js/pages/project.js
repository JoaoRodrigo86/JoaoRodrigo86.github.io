let allFiles = document.getElementById('project-info').querySelectorAll('img');
allFiles.forEach(file => {
    let fileSrc = file.src;
    let extension = fileSrc.split('.').reverse()[0];
    switch (extension) {
        case "png":
        case "jpg":
        case "gif":
            break;
        case "mp4":
            const VIDEO_EL = document.createElement('video');
            VIDEO_EL.src = file.src;
            VIDEO_EL.controls = "controls";
            file.parentNode.replaceChild(VIDEO_EL, file);
            break;
        default:
            if (file.alt.toLowerCase() == 'youtube') {
                const IFRAME_EL = document.createElement('iframe');
                IFRAME_EL.src = file.src;
                IFRAME_EL.allowFullscreen = "allowFullScreen"
                file.parentNode.replaceChild(IFRAME_EL, file);
                break;
            }
            console.log('Unknown file type: ' + extension);
            break;
    }
});