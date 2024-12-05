import express from "express"
import { indexRouter } from "./routes/v1"

const app = express()

app.use("/api/v1", indexRouter)




app.listen(process.env.PORT || 3000, () => {
    console.log("server listening")
})