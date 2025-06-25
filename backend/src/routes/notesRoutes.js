import express from "express";
import { createNote, deleteNote, getAllNotes, updateNode } from "../controllers/notesControllers.js";


const router = express.Router();


router.get("/",getAllNotes);

router.post("/",createNote);

router.put("/:id", updateNode);

router.delete("/:id",deleteNote);


export default router;