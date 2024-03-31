import app from "./app";
import { connectDB } from "./config/database";
import config from './config/config';

async function main() {
  await connectDB();
  app.listen(config.PORT);
  console.log("Server on port ", config.PORT);
}

main();