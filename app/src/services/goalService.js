import { STORAGE_KEYS } from "../constants/storageKeys";

export function getGoals() {
  const goals = localStorage.getItem(STORAGE_KEYS.GOALS);
  return goals ? JSON.parse(goals) : [];
}

export function saveGoals(goals) {
  localStorage.setItem(
    STORAGE_KEYS.GOALS,
    JSON.stringify(goals)
  );
}