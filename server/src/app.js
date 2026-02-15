import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"
import errorHanlder from "./middlewares/ErrorHanlder.js";
import notFoundEntityMiddleware from "./middlewares/NotFoundEntityHandler.js";
import corsMiddleware from "./middlewares/corsMiddleware.js";

db.on("error", console.log.bind(console, 'Error to connect with db'))
db.once("open", () => {
    console.log("Succesfully conected with database")
});


const app = express();
app.use(corsMiddleware);
app.use(express.json());
routes(app);

app.use(errorHanlder);
app.use(notFoundEntityMiddleware)




export default app;