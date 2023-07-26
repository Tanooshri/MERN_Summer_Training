import NotesModel from "../models/notes-schema.js";

export const noteService = {

    async addNote(noteObject){
        try{
            const doc = await NotesModel.create(noteObject);
            return doc;
        }
        catch(err){
            throw err;
        }
    },
    async readAllNotes(){
        try{
        const docs = await NotesModel.find({}).select("title descr cdate importance").exec();
        return docs;
        }
        catch(err){
            throw err;
        }
    },
       async deleteOneNote(title){
        try{
            const res = await NotesModel.deleteOne({title:title});
            const count = res.deletedCount;
            return count;
        }
        catch(err){
            throw err;
        }
        }
}