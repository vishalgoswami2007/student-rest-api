import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

await connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server Running At ${process.env.PORT}`);
});