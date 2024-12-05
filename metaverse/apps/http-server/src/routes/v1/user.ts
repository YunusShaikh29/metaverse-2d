import { Router } from "express"

export const userRouter = Router()


userRouter.post("/signup", (req, res) => {
    res.json({
        message: "Signup"
    })
})

userRouter.post("/signin", (req, res) => {
    res.json({ 
        message: "signin"
    })
})


userRouter.post("/metadata", (req, res) => {

})

userRouter.get("/metadata/bulk", (req, res) =>{

})

