import { Request, Response } from "express";
import logger from "../../logger";
import Consent from "../../models/Consent";

export default async (req: Request, res: Response) => {
  const {
    enabled,
    userId,
    id: consent
  } = req.body;

  try {
   
      const newConsent = await Consent.create({
        enabled,
        userId,
        consent
      });
  
      if(newConsent) {
        const payload = {
          id: newConsent.consent,
          enabled: newConsent.enabled,
        }
        res.status(200).json(payload);
      } else {
        res.status(500).send()
      }
    
  } catch(error) {
    logger.error(`Exception creating consent ${error}`);
    res.sendStatus(500);
  }
}