//sharp system
//const notes =['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

//sharp and flat system
const notes =['C','C#','D','Eb','E','F','F#','G','Ab','A','Bb','B'];

const chord = function (roots,type){

  //MAYOR
  if(type ==='mayor'){
  let root = roots.charAt(0).toUpperCase() + roots.slice(1);  
  let rootIndex= notes.indexOf(root);
  
  //third mayor
  let thirdIndex;
      if((rootIndex+4) > 11){
    thirdIndex = (rootIndex + 4) - notes.length;
  } else{
    thirdIndex= rootIndex+4;
  }
    
  let fifthIndex;
    if(rootIndex+7 > 11){
    fifthIndex = (rootIndex + 7) - notes.length;
  } else{
    fifthIndex= rootIndex+7;
  }
    
  let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex]]
    return arrResult.join(' ');
  }

  //MINOR
  else if(type === 'minor'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1);
    
    let rootIndex= notes.indexOf(root);
      
    //third minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = (rootIndex + 3) - notes.length;
    } else{
     thirdIndex= rootIndex+3;
    }

    //fifth index
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //MAYOR7
  else if(type === 'mayor7'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1); 
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
        if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }
    
    //seventh mayor
    let seventhIndex;
    if(rootIndex+11 > 11){
      seventhIndex = (rootIndex + 11) - notes.length;
    } else{
      seventhIndex= rootIndex+11;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }

    //MINOR7
    else if(type === 'minor7'){
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      
      let rootIndex= notes.indexOf(root);
        
      //third index minor
      let thirdIndex;
      if((rootIndex+3) > 11){
       thirdIndex = notes[(rootIndex + 3) - notes.length];
      } else{
       thirdIndex= notes[rootIndex+3];
      }
  
      //fifth index
      let fifthIndex;
        if(rootIndex+7 > 11){
        fifthIndex = (rootIndex + 7) - notes.length;
      } else{
        fifthIndex= rootIndex+7;
      }

      //seventh index minor
      let seventhIndex;
      if((rootIndex+10) > 11){
        seventhIndex = (rootIndex + 10) - notes.length;
       } else{
        seventhIndex= rootIndex+10;
       }
  
      let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
        return arrResult.join(' ');
    }

    //DOMINANT7
  else if(type === 'dom7'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1); 
    let rootIndex= notes.indexOf(root);
    
    //mayor
    let thirdIndex;
        if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
    let fifthIndex;
      if(rootIndex+7 > 11){
      fifthIndex = (rootIndex + 7) - notes.length;
    } else{
      fifthIndex= rootIndex+7;
    }
    // minor 
    let seventhIndex;
    if(rootIndex+10 > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
    } else{
      seventhIndex= rootIndex+10;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }

  //DIMINISHED TRIAD
  else if(type === 'dim'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1);
    
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
    if((rootIndex+4) > 11){
     thirdIndex = (rootIndex + 4) - notes.length;
    } else{
     thirdIndex= rootIndex+4;
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //AUGMENTED TRIAD
  else if(type === 'aug'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1);
    
    let rootIndex= notes.indexOf(root);
      
    //third mayor
    let thirdIndex;
    if((rootIndex+4) > 11){
     thirdIndex = (rootIndex + 4) - notes.length;
    } else{
     thirdIndex= rootIndex+4;
    }

    //sharp fifth index
    let fifthIndex;
      if(rootIndex+8 > 11){
      fifthIndex = (rootIndex + 8) - notes.length;
    } else{
      fifthIndex= rootIndex+8;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex] ,notes[fifthIndex]]
      return arrResult.join(' ');
  }

  //HALF-DIMINISHED7
  else if(type === 'halfDim7'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1);
    
    let rootIndex= notes.indexOf(root);
      
    //third index minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = notes[(rootIndex + 3) - notes.length];
    } else{
     thirdIndex= notes[rootIndex+3];
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    //seventh index minor
    let seventhIndex;
    if((rootIndex+10) > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
     } else{
      seventhIndex= rootIndex+10;
     }

    let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
  }

  //DIMINISHED7
   else if(type === 'dim7'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1);
    
    let rootIndex= notes.indexOf(root);
      
    //third index minor
    let thirdIndex;
    if((rootIndex+3) > 11){
     thirdIndex = notes[(rootIndex + 3) - notes.length];
    } else{
     thirdIndex= notes[rootIndex+3];
    }

    //flat fifth index
    let fifthIndex;
      if(rootIndex+6 > 11){
      fifthIndex = (rootIndex + 6) - notes.length;
    } else{
      fifthIndex= rootIndex+6;
    }

    //seventh index diminished (double flat)
    let seventhIndex;
    if((rootIndex+9) > 11){
      seventhIndex = (rootIndex + 9) - notes.length;
     } else{
      seventhIndex= rootIndex+9;
     }

    let arrResult = [notes[rootIndex],thirdIndex ,notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
  }

  //AUGMENTED7
  else if(type === 'aug7'){
    let root = roots.charAt(0).toUpperCase() + roots.slice(1); 
    let rootIndex= notes.indexOf(root);
    
    //mayor
    let thirdIndex;
      if((rootIndex+4) > 11){
      thirdIndex = (rootIndex + 4) - notes.length;
    } else{
      thirdIndex= rootIndex+4;
    }
      
     //sharp fifth index
     let fifthIndex;
     if(rootIndex+8 > 11){
     fifthIndex = (rootIndex + 8) - notes.length;
   } else{
     fifthIndex= rootIndex+8;
   }

    // minor sevent
    let seventhIndex;
    if(rootIndex+10 > 11){
      seventhIndex = (rootIndex + 10) - notes.length;
    } else{
      seventhIndex= rootIndex+10;
    }

    let arrResult = [notes[rootIndex],notes[thirdIndex],notes[fifthIndex],notes[seventhIndex]];
      return arrResult.join(' ');
    }

    //MAYOR9
    else if(type==='mayor9'){

      //9th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+2) > 11){
        extentionIndex = (rootIndex + 2) - notes.length;
      } else{
        extentionIndex = rootIndex+2;
      }

     return chord(roots,'mayor7')+' '+ notes[extentionIndex];
    }

    //MINOR9
    else if(type==='minor9'){

      //9th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+2) > 11){
        extentionIndex = (rootIndex + 2) - notes.length;
      } else{
        extentionIndex = rootIndex+2;
      }

     return chord(roots,'minor7')+' '+ notes[extentionIndex];
    }

    //DOMINANT9
    else if(type==='dom9'){

      //9th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+2) > 11){
        extentionIndex = (rootIndex + 2) - notes.length;
      } else{
        extentionIndex = rootIndex+2;
      }

     return chord(roots,'dom7')+' '+ notes[extentionIndex];
    }

  //MAYOR11
        else if(type==='mayor11'){

          //11th note
          let root = roots.charAt(0).toUpperCase() + roots.slice(1);
          let rootIndex= notes.indexOf(root);
          let extentionIndex;
          if((rootIndex+5) > 11){
            extentionIndex = (rootIndex + 5) - notes.length;
          } else{
            extentionIndex = rootIndex+5;
          }
    
         return chord(roots,'mayor9')+' '+ notes[extentionIndex];
        }
    
  //MINOR11
        else if(type==='minor11'){
    
          //11th note
          let root = roots.charAt(0).toUpperCase() + roots.slice(1);
          let rootIndex= notes.indexOf(root);
          let extentionIndex;
          if((rootIndex+5) > 11){
            extentionIndex = (rootIndex + 5) - notes.length;
          } else{
            extentionIndex = rootIndex+5;
          }
    
         return chord(roots,'minor9')+' '+ notes[extentionIndex];
        }

    //DOMINANT11
    else if(type==='dom11'){

      //9th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+5) > 11){
        extentionIndex = (rootIndex + 5) - notes.length;
      } else{
        extentionIndex = rootIndex+5;
      }

     return chord(roots,'dom9')+' '+ notes[extentionIndex];
    }

   //MAYOR13
     else if(type==='mayor13'){

      //13th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+9) > 11){
        extentionIndex = (rootIndex + 9) - notes.length;
      } else{
        extentionIndex = rootIndex+9;
      }

     return chord(roots,'mayor11')+' '+ notes[extentionIndex];
    }

//MINOR13
    else if(type==='minor13'){

      //13th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+9) > 11){
        extentionIndex = (rootIndex + 9) - notes.length;
      } else{
        extentionIndex = rootIndex+9;
      }

     return chord(roots,'minor11')+' '+ notes[extentionIndex];
    }

     //DOMINANT13
     else if(type==='dom13'){

      //9th note
      let root = roots.charAt(0).toUpperCase() + roots.slice(1);
      let rootIndex= notes.indexOf(root);
      let extentionIndex;
      if((rootIndex+9) > 11){
        extentionIndex = (rootIndex + 9) - notes.length;
      } else{
        extentionIndex = rootIndex+9;
      }

     return chord(roots,'dom11')+' '+ notes[extentionIndex];
    }
}



/*     console.log(
chord('A#','minor')
  ); 
   */

 export {chord}; 

//naturalized some third exp: C minor = C Eb G not C D# G


