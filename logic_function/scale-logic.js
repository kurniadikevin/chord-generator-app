

const scale= function(roots,type){
    const notes =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

    if(type === 'Mayor'){
        let mayorInterval=[ 0, 2, 4, 5, 7, 9, 11];
        return  scaleIntervalInput(roots,mayorInterval)
    } else if( type === 'Minor(Natural)'){
        let minorInterval =[ 0, 2, 3, 5, 7, 8, 10];
        return scaleIntervalInput(roots, minorInterval);
    } else if( type === 'Harmonic-Minor'){
        let minorInterval =[ 0, 2, 3, 5, 7, 8, 11];
        return scaleIntervalInput(roots, minorInterval);
    } else if( type === 'Melodic-Minor'){
        let minorInterval =[ 0, 2, 3, 5, 7, 9, 11, 12, 10, 8, 7, 5, 3, 2, 0];
        return scaleIntervalInput(roots, minorInterval);
    } else if (type === 'Pentatonic-Mayor'){
        let pentatonicMayorInterval =[ 0, 2, 4, 7, 9];
        return scaleIntervalInput(roots, pentatonicMayorInterval);
    } else if (type === 'Pentatonic-Minor'){
        let pentatonicMinorInterval = [ 0,3,5,7,10];
        return scaleIntervalInput(roots,pentatonicMinorInterval);
    } else if (type === 'Whole-Tone'){
        let wholeToneInterval = [0,2,4,6,8,10];
        return scaleIntervalInput(roots,wholeToneInterval);
    } else if (type === 'Augmented'){
        let augmentedInterval = [0, 3, 4, 7, 8, 11];
        return scaleIntervalInput(roots,augmentedInterval);
    } else if (type === 'Diminished'){
        let diminishedInterval = [0,2,3,5,6,8,9,11];
        return scaleIntervalInput(roots,diminishedInterval);
    } else {
        return '';
    }

}


const scaleIntervalInput = (roots, interval)=>{
    const notes =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

    let root = roots.charAt(0).toUpperCase() + roots.slice(1);  
    let rootIndex= notes.indexOf(root);

  
    let arrScale = [];
    for (let i=0; i< interval.length ; i++){
        let scalePosition=  rootIndex + interval[i];
        if(scalePosition > 11){
            scalePosition -= notes.length;
        }

        arrScale.push(
            notes[ scalePosition ]
        );
    }
    return arrScale.join(' ');
}

export {scale};