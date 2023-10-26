import { Router } from "express";
import prisma from "../../config/prisma";
const router: Router = Router();

router.post("/", async (req, res) => {
    if (!req.body.userId || !req.body.title || !req.body.content) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const post = await prisma.post.create(
            {
                data: {
                    title: req.body.title,
                    content: req.body.content,
                    user: {
                        connect: {
                            id: req.body.userId
                        }
                    }
                }
            }
        )
        res.status(201).json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

router.get("/", async (req, res) => {
    const urlparams = req.query;
    const start = urlparams.start ? parseInt(urlparams.start as string) : 0;
    const limit = urlparams.limit ? parseInt(urlparams.limit as string) : 10;
    try {
        const post = prisma.post.findMany({
            skip: start,
            take: limit,
            include: {
                user: true,
                reactions: true,
                comments: true
            }
        })
        res.status(200).json(post);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;