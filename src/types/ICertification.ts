export interface ICertification {
  id: number;
  missionId: number;
  title: string;
  checkboxes: string[];
  success: number;
  failed: number;
}
