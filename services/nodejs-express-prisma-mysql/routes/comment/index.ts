import { Router } from "express";
import prisma from "../../config/prisma";

const router: Router = Router();

router.post("/", async (req, res) => {
    if (!req.body.userId || !req.body.postId || !req.body.content) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const comment = await prisma.comment.create(
            {
                data: {
                    content: req.body.content,
                    user: {
                        connect: {
                            id: req.body.userId
                        }
                    },
                    post: {
                        connect: {
                            id: req.body.postId
                        }
                    }
                }
            }
        )
        res.status(201).json(comment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
}
);

export default router;