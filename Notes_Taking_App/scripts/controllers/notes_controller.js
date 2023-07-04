//Controller(I/O)+Events+Talk to services
import{noteOperations} from '../services/note-service.js';
window.addEventListener('load',init);
function init(){
 showCounts();
 bindEvents();
}
function bindEvents(){
  document.querySelector('#add').addEventListener('click',addNote);
}
function showCounts(){
  document.querySelector('#total').innerText= noteOperations.total();
  document.querySelector('#marktotal').innerText= noteOperations.marktotal();
  document.querySelector('#unmarktotal').innerText= noteOperations.unmarktotal();
}
function addNote(){
   //read id,title,desc,date of completion,importance
    //DOM
    const fields =  ['id','title','desc','cdate','importance'];
    const noteObject = {}; //object lateral
    for(let field of fields){
      noteObject[field]= document.querySelector(`#${field}`).value.trim();
    }
    noteOperations.add(noteObject);
    printNote(noteObject);
    showCounts();
    //console.log(noteObject);
 // const id = document.querySelector('#id').value;
 // const title = document.querySelector('#title').value;
}
function printIcon(myClassName='trash'){
  //<i class="fa-solid fa-trash"></i>
  //<i class="fa-solid fa-pen-to-square"></i>
  const iTag = document.createElement('i');
  iTag.className = `fa-solid fa-${myClassName} me-2`;
  return iTag;

}
function printNote(noteObject){
    const tbody=document.querySelector('#notes');
    const row = tbody.insertRow(); //tr
    for(let key in noteObject){ 
        const td = row.insertCell();//</td>
        td.innerText = noteObject[key];
    }
    const td = row.insertCell();//</td> //var likhte to hoisting hojayegi
    td.appendChild(printIcon());
    td.appendChild(printIcon('pen-to-square'));


}