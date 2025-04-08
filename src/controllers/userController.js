import user from "../model/model.js"

export const getUsers = async (req, res)=>{
    try {
        const users = await user.find()

        res.json(users)
        
    } catch (error) {
        res.status(500).json({
            "message":"internal server error"
        })
    }
}

export const getUserById = async (req,res)=>{
    try {
        const singleUser = await user.findById(req.params.id)
        res.json(singleUser)
    } catch (error) {
        res.status(500).json({
            "message":"internal server error"
        })
    }
}


export const saveUser = async (req,res) =>{
    const createUser = new user(req.body)
    try {
        const insertedUser = await createUser.save()
        res.status(201).json(insertedUser)

    } catch (error) {
        res.status(400).json({
            "message":"internal server error"
        })
    }
}

export const updateUser = async (req,res) =>{
    try {
        const updateUser = await user.updateOne({_id:req.params.id}, {$set:req.body})
        res.status(200).json(updateUser)

    } catch (error) {
        res.status(400).json({
            "message":"internal server error"
        })
    }
}

export const deleteUser = async (req,res) =>{
    try {
        const deleteUser = await user.deleteOne({_id:req.params.id})
        res.status(200).json(deleteUser)

    } catch (error) {
        res.status(400).json({
            "message":"internal server error"
        })
    }
}