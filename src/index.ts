import express from "express";

import routerWebhook from "@/routes/webhook-ws";
import { serverConfig } from "@config/server";
import { env } from "@config/env";

const app = express();

app.use(express.json());

const port = env.PORT;

app.get("/health", (_req, res) => res.status(200).send("ok"));

app.use("/webhook", routerWebhook);

app.listen(port, serverConfig);
