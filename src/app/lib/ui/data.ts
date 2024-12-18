import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";

export const fetchRecords = async () => {
  try {
    await connectToDB();
    revalidatePath("/courses");
    return [];
  } catch (error) {
    return { error };
  }
};
