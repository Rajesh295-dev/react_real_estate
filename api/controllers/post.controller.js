import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";
export const getPosts = async (req, res) => {
    const query = req.query;

    try {

        const posts = await prisma.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || 0,
                    lte: parseInt(query.maxPrice) || 100000,
                }

            },
        });

        // setTimeout(() => {
        //     res.status(200).json(posts)
        // }, 3000)

        res.status(200).json(posts)


    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to get Posts " })
    }
}



export const getPost = async (req, res) => {
    const id = req.params.id;

    // Validate the ObjectID
    // if (!ObjectId.isValid(id)) {
    //     return res.status(400).json({ message: 'Invalid ID format' });
    // }

    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    }
                }
            },
        });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        const token = req.cookies?.token;

        if (token) {
            jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
                if (!err) {
                    const saved = await prisma.savedPost.findUnique({
                        where: {
                            userId_postId: {
                                postId: id,
                                userId: payload.id,
                            },
                        },
                    });
                    res.status(200).json({ ...post, isSaved: saved ? true : false });
                }
            });
        } else {
            res.status(200).json({ ...post, isSaved: false });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Failed to get Post " })
    }
}



export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId;

    console.log(req.body);
    try {
        const newPost = await prisma.post.create({
            data: {
                ...body.postData,
                userId: tokenUserId,
                postDetail: {
                    create: body.postDetail,

                }
            }
        })
        res.status(200).json(newPost);
        //console.log(newPost)
        //res.status(201).json({ message: "New post has been created!" })
    } catch (err) {
        // console.log(err)
        res.status(500).json({ message: "Something Wrong!" })
    }
}

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" })
    }
    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10)
        }
        const updatedUser = await prisma.user.update({
            where: { id },
            data: {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });

        //since there password name taken alread y above in line we using userPassword as a new name
        const { password: userPassword, ...rest } = updatedUser
        res.status(200).json(rest)

    } catch (err) {
        // console.log(err)
        res.status(500).json({ message: "Failed to update User " })
    }
}




export const deletePost = async (req, res) => {

    const id = req.params.id;
    const tokenUserId = req.userId;


    try {

        const post = await prisma.post.findUnique({
            where: { id }
        })
        if (post.userId !== tokenUserId) {
            return res.status(403).json({ message: "Not Authorized!" })
        }

        await prisma.post.delete({
            where: { id }
        })
        res.status(200).json({ message: "Post Deleted Successfully!" })
    } catch (err) {
        // console.log(err)
        res.status(500).json({ message: "Failed to get delete Post " })
    }
}