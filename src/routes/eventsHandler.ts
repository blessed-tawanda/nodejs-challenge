import { Router } from "express";
import { updateConsent } from "../controllers";

const router = Router();

router.post('/events', updateConsent);

export default router;