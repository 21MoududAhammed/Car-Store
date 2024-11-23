import app from './app';
import { config } from './app/config';
import mongoose from 'mongoose';

const port = config.port;
async function main() {
  try {
    await mongoose.connect(config.database_uri as string);
    console.log('Connection with database successful!');
    app.listen(port, async () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
