import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

await connectDB();

const server = app.listen(5000, "127.0.0.1", () => {
    console.log("Server Running At 5000");
    console.log("Listening:", server.listening);
    console.log("Address:", server.address());
});

server.on("error", (err) => {
    console.log("SERVER ERROR:", err);
});