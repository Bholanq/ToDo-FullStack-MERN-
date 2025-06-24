import express from "express";

const router = express.Router();


router.get("/sth",(req,res) =>{
    res.send("YOU NOT 12 Notes")
});

router.post("/", (req,res) =>{
    res.status(201).json({message:"post created"})
});

router.put("/:id", (req,res) =>{
    res.status(201).json({message:"post updated"})
});

router.delete("/:id", (req,res) =>{
    res.status(201).json({message:"post deleted"})
});


export default router;