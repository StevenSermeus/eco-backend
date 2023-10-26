import { Router } from "express";
import prisma from "../../config/prisma";
import { Prisma } from "@prisma/client";

const router: Router = Router();

router.post("/", async (req, res) => {
    if (!req.body.userId || !req.body.postId || !req.body.isLike) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const reaction = await prisma.reaction.create(
            {
                data: {
                    isLike: req.body.isLike,
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
        res.status(201).json(reaction);
    } catch (e: any) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === 'P2002') {
                res.status(400).json({ error: "You already reacted to this post" });
                return;
            }
            res.status(500).json({ error: "Something went wrong" });
            return;
        }
        console.error(e);
        res.status(500).json({ error: "Something went wrong" });
    }
});

export default router;