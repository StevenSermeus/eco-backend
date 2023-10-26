import { Router } from "express";
import prisma from "../../config/prisma";

const router: Router = Router();

router.get("/", async (req, res) => {
    try {
        const data = await prisma.user.findMany({
            include: {
                posts: {
                    include: {
                        _count: {
                            select: {
                                comments: true,
                                reactions: true
                            }
                        }
                    }
                }
            }
        });
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
});

export default router;