import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

await connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server Running At ${PORT}`);
    console.log("Listening:", server.listening);
    console.log("Address:", server.address());
});

server.on("error", (err) => {
    console.log("SERVER ERROR:", err);
});