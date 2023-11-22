import PageModel from "~/server/models/Page";

export default defineEventHandler(async () => {
  try {
    const result = await PageModel.find();
    return result;
  } catch (e) {
    console.log(e);
  }
});
