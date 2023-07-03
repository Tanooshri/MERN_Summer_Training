function addNote(){
   //read id,title,desc,date of completion,importance
    //DOM
    const fields =  ['id','title','desc','cdate','importance'];
    const noteObject = {}; //object lateral
    for(let field of fields){
      noteObject[field]= document.querySelector(`#${field}`).value;
    }
    printNote(noteObject);
    //console.log(noteObject);
 // const id = document.querySelector('#id').value;
 // const title = document.querySelector('#title').value;
}
function printNote(noteObject){
    const tbody=document.querySelector('#notes');
    const row = tbody.insertRow(); //tr
    for(let key in noteObject){ 
        const td = row.insertCell();//</td>
        td.innerText = noteObject[key];
    }
}