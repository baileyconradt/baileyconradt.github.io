//this is the javascript file

//toggles auto-pause for other songs when playing a new song
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

//hidden function
function Konami(keyCodes, callback) { 

    const goal = keyCodes.length 
    let targetIndex = 0 
    let score = 0 

    const reset = () => { 
        targetIndex = 0 
        score = 0 
    } 

    document.addEventListener('keydown', function (e) { 
        if (e.keyCode === keyCodes[targetIndex]) { 
            score += 1 
            targetIndex += 1 
            if (score === goal) { 
                reset() 
                callback() 
            } 
        } else { 
            reset() 
        } 
    }) 
} 

Konami([69, 65, 83, 84], () => { 
    window.location = 'https://www.youtube.com/watch?v=BHS0482sc0E&feature=youtu.be' 
}) 
