const mapping: Record<string, string> = {
  academies: 'academy',
  players: 'player',
  'training-plans': 'training_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
