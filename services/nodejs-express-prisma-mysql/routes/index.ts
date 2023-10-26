import { Router } from "express";
import userRouter from "./user"
import postRouter from "./post"
import reactionRouter from "./reaction"
import commentRouter from "./comment"
import statsRouter from "./stats"
const router: Router = Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
router.use("/reaction", reactionRouter);
router.use("/comment", commentRouter);
router.use("/stats", statsRouter);

export default router;