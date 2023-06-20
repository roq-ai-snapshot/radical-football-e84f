import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TrainingPlanInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  description: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TrainingPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
  description?: string;
}
