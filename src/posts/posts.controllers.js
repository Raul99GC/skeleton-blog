const uuid = require('uuid')


const postsDB = [
    {
        "id": 'cc4d9efa-884c-4138-8f5d-64c69bef5799',
        "title": "post 1",
        "content":"este es el contenido del primer post",
        "header_image": "https://i.pinimg.com/236x/bf/e8/9e/bfe89e75ff5c41e52e83dcab8856cec2.jpg",
        "user_id": "7a1e9631-6c61-4d7b-9725-a4821f6f97bf",//Aqui hara referencia al usuario de tu userDB
        "published": true
    },
    {
        "id": 'fe62179f-574c-4871-856c-070eae2c1b68',
        "title": "post 2",
        "content":"este es el contenido del segundo post",
        "header_image": "https://labyes.com/wp-content/uploads/2020/07/06Jul_LabyesNotaWeb-600x401.png",
        "user_id": "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",//Aqui hara referencia al usuario de tu userDB
        "published": true
    }
]


const getAllPosts = () => {    
    return postsDB
}


const getPostById = (postId) => {
    const data = postsDB.filter((post) => post.id === postId)
    console.log(data)
    return data.length ? data[0] : false
}

const getPostsByUserId = (userId) => {
    const data = postsDB.filter((post) => post.user_id === userId)
    return data.length ? data : false
}

const createNewPost = (data, userId) => {

    const newPost = {
        id: uuid.v4,
        title: data.title,
        content: data.content,
        header_image: data.header_image ? data.header_image : '',
        user_id: userId,
        published: true
    }
    postsDB.push(newPost)
    return newPost
}

const deletePost = (postId) => {
    const index = postsDB.findIndex((post) => post.id === postId)
    if(index !== -1) {
        postsDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

const editPost = (postId, data) => {

    const index = postsDB.findIndex((post) => post.id === postId)
    console.log('el index a la hora de buscar es: '+index)

    if (index !== -1) {
        postsDB[index] ={
            id: postsDB[index].id,
            title: data.title,
            content: data.content,
            header_image: data.header_image,
            user_id: postsDB[index].user_id,
            published: data.published ? data.published : postsDB[index].published
            
        }
        return postsDB[index]
    } else {
        const userId = postsDB[index].id
        const newPost = {
            title: data.title,
            content: data.content,
            header_image: data.header_image
        }
        return createNewPost(newPost, userId)
    }

}


module.exports = {
    getAllPosts,
    getPostById,
    getPostsByUserId,
    createNewPost,
    deletePost,
    editPost
}

