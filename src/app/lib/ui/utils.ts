import mongoose from "mongoose";

const connection: { isConnected?: boolean } = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    if (!process.env.MONGO) {
      throw new Error("MONGO environment variable is not defined");
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
