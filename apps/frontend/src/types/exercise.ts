import { z } from "zod";

export const ExerciseSchema = z.object({
  id: z.number(),
  topic_id: z.number(),
  difficulty_level: z.number(),
  problem_text: z.string(),
  solution_text: z.string(),
  generated_hash: z.string(),
  topic_macro_area: z.string(),
  topic_name: z.string(),
  year_number: z.number(),
  short_code: z.string(),
  tags: z.array(z.string()).optional(),
});

export type Exercise = z.infer<typeof ExerciseSchema>;
