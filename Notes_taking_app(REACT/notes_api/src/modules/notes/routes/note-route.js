import express from 'express';
import { NOTE_ROUTES } from '../../../shared/utils/app-constants.js';
import noteController from '../controllers/note-controller.js';

const noteRoutes = express.Router();

noteRoutes.post(NOTE_ROUTES.ADD,noteController.addNote);
noteRoutes.get(NOTE_ROUTES.GET_ALL_NOTES,noteController.getAllNotes);
noteRoutes.delete(NOTE_ROUTES.DELETE,noteController.deleteNote);

// notesroute.get('/notesroute',(req,res)=>{
//     res.send('Hello');
// })

// notesroute.post('/notesroute',(req,res)=>{
//     //console.log(req.url);
//     const userid = req.params.userid;
//     const password = req.params.password;
    
//     res.send().status(200);
// })

export default noteRoutes;

