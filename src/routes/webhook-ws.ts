import {
  webhookWsGetController,
  webhookWsPostController,
} from "@/controllers/webhook-ws.controller";
import { Router } from "express";

const routerWebhook = Router();

routerWebhook.get("/", webhookWsGetController);

routerWebhook.post("/", webhookWsPostController);

export default routerWebhook;
