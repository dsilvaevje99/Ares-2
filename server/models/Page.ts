import mongoose, { mongo } from "mongoose";

const pageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  content: { type: Array, required: true, trim: true },
});

const PageModel = mongoose.model("page", pageSchema);

export default PageModel;
