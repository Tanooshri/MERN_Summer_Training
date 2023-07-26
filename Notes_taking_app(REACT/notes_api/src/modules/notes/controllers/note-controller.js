import { noteService } from "../services/note-service.js";
import { STATUS_CODE } from "../../../shared/utils/app-constants.js";
const noteController = {
    async getAllNotes(request, response){
        try{
        const docs = await noteService.readAllNotes();
        response.status(STATUS_CODE.SUCCESS).json({'notes': docs});
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:'Problem in Fetching Notes'});
            console.log(err);
        }
    },
   async addNote(request,response){
        const noteBody =  request.body;
         try{
        const doc = await noteService.addNote(noteBody);
        if(doc && doc.title){
            response.status(STATUS_CODE.SUCCESS).json({message:'Note Added SuccessFully'});
        }else{
            response.status(STATUS_CODE.RESOURSE_NOT_FOUND).json({message:'Not Able to Add a Note'});
        }
         }
         catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:'ERROR'});
            throw err;
         }
    },
    async deleteNote(request,response){
        const title = request.query.title;
        try{
            const deletedCount = await noteService.deleteOneNote(title);
            if(deletedCount==1){
                response.status(STATUS_CODE.SUCCESS).json({message:'Note Deleted SuccessFully'});
            }else{
                response.status(STATUS_CODE.RESOURSE_NOT_FOUND).json({message:'Not Able to Delete a Note'});
            }
            
        }
        catch(err){
            response.status(STATUS_CODE.SERVER_ERROR).json({message:'ERROR'});
            throw err;
        }
        
    }
}
export default noteController;