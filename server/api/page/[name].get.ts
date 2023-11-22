import PageModel from "~/server/models/Page";

export default defineEventHandler(async (event) => {
  try {
    const { name } = event.context.params!;
    const result = await PageModel.findOne({ name });
    return result;
  } catch (e) {
    console.log(e);
  }
});
