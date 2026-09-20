import app from "./app.js";
import config from "./config/config.js";
import { connectDB } from "./config/db.js";

await connectDB();

app.listen(config.server_port, () => {
  console.log(
    `server running in ${config.node_env} on port: ${config.server_port}`,
  );
});
