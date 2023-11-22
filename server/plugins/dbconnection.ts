import mongoose from "mongoose";

export default async () => {
  const runtimeConfig = useRuntimeConfig();
  const DB_USER = "dsilvaevje";
  const DB_PASS = runtimeConfig.public.DB_PASSWORD;
  const DB_NAME = "Pages";
  const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASS}@content.bvwswoo.mongodb.net/?retryWrites=true&w=majority`;

  const DB_OPTIONS = {
    dbName: DB_NAME,
    user: DB_USER,
    pass: DB_PASS,
    authSource: "admin",
  };

  try {
    await mongoose.connect(DB_URL, DB_OPTIONS);
    console.log("Connected to database");
  } catch (e) {
    console.log(e);
  }
};
