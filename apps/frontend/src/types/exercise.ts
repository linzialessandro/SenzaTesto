export interface Exercise {
  id: number;
  topic_id: number;
  difficulty_level: number;
  problem_text: string;
  solution_text: string;
  generated_hash: string;
  topic_macro_area: string;
  topic_name: string;
  year_number: number;
  short_code: string;
  tags?: string[];
}
