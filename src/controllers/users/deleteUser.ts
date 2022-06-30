import { Request, Response } from "express";
import { response } from "../../helpers";
import logger from "../../logger";
import User from "../../models/User";

export default async (req: Request, res: Response) => {
  const {
    id
  } = req.params;

  try {
    const user = await User.destroy({
      where: {
        id
      }
    });

    if (user) {
      res.status(200).json(response(true, `User deleted`));
    } else {
      res.status(500).json(response(false, `User not deleted`));
    }
  } catch (error) {
    logger.error(`Exception deleting user ${error}`);
    res.sendStatus(500);
  }
}