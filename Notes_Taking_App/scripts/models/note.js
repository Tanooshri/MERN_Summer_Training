//ES6 //Data me chhed chhad
class Note{
  constructor(noteObject){
    for(let key in noteObject)
    this[key] = noteObject[key];
  }
}
export default Note;