/**
 * Required External Modules
 */
import express from "express";
import cors from "cors";
import helmet from "helmet";
import supertokens from "supertokens-node";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import config from "config";

/**
 * Configuration Variables
 */

const node_port = config.get("server.port");
const supertokensConfig = config.get("supertokens");

/**
 * App Variables
 */
if (!node_port) {
  process.exit(1);
}

const PORT = Number(node_port);

const app = express();

/**
 *  App Configuration
 */
supertokens.init({
  supertokens: {
    connectionURI: supertokensConfig.connection_uri,
  },
  appInfo: {
    appName: "Supertokens Demo",
    apiDomain: supertokensConfig.api_domain,
    websiteDomain: supertokensConfig.website_domain,
  },
  recipeList: [EmailPassword.init(), Session.init()],
});

app.use(
  cors({
    origin: supertokensConfig.website_domain,
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(supertokens.middleware());

// custom API that requires session verification
app.get("/sessioninfo", Session.verifySession(), async (req, res) => {
  const session = req.session;
  res.send({
    sessionHandle: session.getHandle(),
    userId: session.getUserId(),
    jwtPayload: session.getJWTPayload(),
    sessionData: await session.getSessionData(),
  });
});

app.use(supertokens.errorHandler());

app.use((err, req, res, next) => {
  res.status(500).send("Internal error: " + err.message);
});

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
