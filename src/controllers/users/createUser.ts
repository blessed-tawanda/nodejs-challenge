import { Request, Response } from "express";
import { response } from "../../helpers";
import logger from "../../logger";
import User from "../../models/User";

export default async (req: Request, res: Response) => {
  const { email } = req.body;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  if(!emailRegex.test(email)) {
    return res.sendStatus(422);
  }

  try {
    const newUser = await User.create({ email });
    const payload = { ...newUser.toJSON(), consents: await newUser.getConsents() }
    res.status(200).json(payload);
  } catch (error) {
    const err = error as any;
    if(err.name = 'SequelizeUniqueConstraintError') {
      return res.status(422).json(response(false, "Email Already Exist"));
    }
    logger.error(`Exception creating user ${error}`);
    res.sendStatus(422)
  }

}