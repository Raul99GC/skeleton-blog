const postControllers = require('./posts.controllers')


// ? ------------ Get's

const getAll = (req, res) => {
    const data = postControllers.getAllPosts()
    return res.status(200).json({items: data.length, data : data})
}

const getById = (req, res) => {
    const id = req.params.id
    const data = postControllers.getPostById(id)

    if(data) {
        return res.status(200).json(data)
    } else {
        return res.status(404).json({message: `El Post con id ${id} no existe`})
    }
}

const getByUserId = (req, res) => {
    userId = req.user.id
    const data = postControllers.getPostsByUserId(userId)
    if(data) {
        return res.status(200).json(data)
    } else {
        return res.status(404).json({message: `No hay posts con el id: ${id} `})
    }
}


// ? ------------ Deletes

const remove = (req, res) => {
    const id = req.params.id
    const response = postControllers.deletePost(id) 

    if(response) {
        return res.status(204)
    } else {
        return res.status(400).json({message: 'Invalid ID '})
    }
} // ! este no se usa pero pz lo puse vedad... juas juas juas 

const removeMyPost = (req, res) => {
    const id = req.params.id
    const response = postControllers.deletePost(id) 

    if(response) {
        return res.status(204)
    } else {
        return res.status(400).json({message: 'Invalid ID ', id})
    }
}


// ? ------------ Edit

const editMyPost = (req, res) => {
    const postId = req.params.id
    const data = req.body

    if(!Object.keys(data).length){ 
        return res.status(400).json({})
    } else if(!data.title || !data.content) {
        return res.status(400).json({
            message: "All fields must be completed my",
            fields: {
                title: 'string',
                content: 'string'
            },
        })
    } else {
        const postEdited = postControllers.editPost(postId, data)

        return res.status(200).json({
            message: 'User edited succesfully',
            user: postEdited
        })
    }

}


// ? ------------ Otros

const createNew= (req, res) => {
    const data = req.body
    const userId = req.user.id

    if(!req.body.title || !req.body.content) {
        res.status(400).json({
            message: "All fields must be completed",
            fields: {
                title: 'string',
                content: 'string'
            }
        })
    } else {
        const response = postControllers.createNewPost(data, userId)
        return res.status(201).json({
            message: `Post created succesfully with id: ${response.id}`,
            post: response
         })
    }
}


module.exports = {
    getAll,
    getById,
    getByUserId,
    remove,
    removeMyPost,
    editMyPost,
    createNew,

}












