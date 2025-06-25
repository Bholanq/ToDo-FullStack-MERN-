
export const getAllNotes = (req,res) =>{
    res.send("YOU NOT 12 Notes");
}

export const createNote = (req,res) =>{
    res.status(201).json({message:"post created"});
}

export const updateNode = (req,res) =>{
    res.status(201).json({message:"post updated"});
}

export const deleteNote = (req,res) =>{
    res.status(201).json({message:"post deleted"});
}