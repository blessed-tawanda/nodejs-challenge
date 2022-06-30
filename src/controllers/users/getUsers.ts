import { Request, Response } from "express";
import Consent from "../../models/Consent";
import User from "../../models/User";
import { mapConsentToID } from "../helpers";

export default async (req: Request, res: Response) => {
  
  try {
    const users = await User.findAll({
      include: {
        model: Consent,
        as: 'consents'
      }
    });
    
    // console.log()

    res.status(200).json(mapConsentToID(users))
  } catch (error) {
    console.log(error)
    res.sendStatus(422)
  }

}