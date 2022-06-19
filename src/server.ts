import express, { Request, Response } from "express";
import cors from "cors";
import { URLController } from "./controller/URLController";
import { MongoConnection } from "./database/MongoConnection";

const app = express();
app.use(express.json());
app.use(cors());

const database= new MongoConnection();
database.connect();

const urlController = new URLController();
app.post("/shortener", (req: Request, res: Response) => {
  urlController.shortener(req, res);
});

app.get("/:hash", (req: Request, res: Response) => {
  urlController.redirectURL(req, res);
});


app.get("/", (req: Request, res: Response) => {
  res.redirect('https://www.google.com');
});




app.listen(5000, () => {
  console.log("HTTP server running");
});
