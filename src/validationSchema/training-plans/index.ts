import * as yup from 'yup';

export const trainingPlanValidationSchema = yup.object().shape({
  description: yup.string().required(),
  player_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
