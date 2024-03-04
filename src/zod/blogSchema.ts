import { z } from "zod";
const blogSchema = z.object({
  id: z
    .preprocess((val) => parseInt(z.string().parse(val), 10), z.number())
    .optional(),
  title: z.string({
    required_error: "Title is required",
  }),
  content: z.string({
    required_error: "Content is required",
  }),
  image: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  author: z.string({
    required_error: "Author is required",
  }),
  description: z.string().optional(),
});

export default blogSchema;
