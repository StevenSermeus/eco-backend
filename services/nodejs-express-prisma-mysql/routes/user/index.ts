import { Router } from "express";
import prisma from "../../config/prisma";
const router: Router = Router();

router.post("/", async (req, res) => {
    if (!req.body.email) {
        res.status(400).json({ error: "Missing required fields" });
        return;
    }
    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error");
    }
});

export default router;
