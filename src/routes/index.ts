import { Request, Response } from "experess";
import logger from "../logger";
import { response } from "helpers";

export const notFoundHandler = (req: Request, res: Response) => {
    logger.info(`${req.url} Route not found`);
    res.status(404).json(response(false, `Route Not Found`));
}

export const healthCheckHandler = (req: Request, res: Response) => {
    logger.info(`Health check for service`);
    res.status(200).json(response(true, `Service Running`));
}