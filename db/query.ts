import { cache } from "react";
import db from "@/db/dizzle";

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany();

  return data;
});
