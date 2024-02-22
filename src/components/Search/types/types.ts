export interface RootState {
  skills: SkillsState;
}

export interface SkillsState {
  items: Skill[];
  loading: boolean;
  error: string | null;
  search: string;
}

export interface Skill {
  id: number;
  name: string;
}
