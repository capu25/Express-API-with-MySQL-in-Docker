import { Request, Response } from "express";

export const getNewFeatures = (req: Request, res: Response) => {
  res.status(200).send("New Features works from controller!");
};
