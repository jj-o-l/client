export interface IChallenge {
  userId: number;
  title: string;
  description: string;
  deadline: string;
  level: number;
  maxParticipants: number;
  reward: string;
  categories: string[];
  rules: string[];
}
