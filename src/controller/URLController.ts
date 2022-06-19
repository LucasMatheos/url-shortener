import { Request, Response } from "express";
import shortid from "shortid";
import { config } from "../config/Constants";
import { URLModel } from "../database/model/URL";

export class URLController {
  public async shortener(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;
    const url = await URLModel.findOne({ originURL });
    if (url) {
      res.json(url);
      return;
    }
    const hash = shortid.generate();
    const shortURL = `${config.API_URL}${hash}`;
    const newURL = await URLModel.create({
      originURL,
      hash,
      shortURL,
    });

    res.json(newURL);
  }

  public async redirectURL(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });
    if (url?.originURL) {
      res.redirect(url.originURL);
      return;

    }

    res.status(400).json({error: "URL not found"});
  }
}
