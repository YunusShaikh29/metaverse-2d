import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";
import { elementRouter } from "./element";

export const indexRouter = Router()


indexRouter.get("/elements", (req, res) => {
    
})

indexRouter.get("/avatars", (req, res) => {

})


indexRouter.use("/user", userRouter)
indexRouter.use("/space", spaceRouter)
indexRouter.use("/admin", adminRouter)
// indexRouter.use("/element", elementRouter)