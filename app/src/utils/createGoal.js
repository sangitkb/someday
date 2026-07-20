export function createGoal({
  title,
  category,
  notes,
}) {
  return {
    id: crypto.randomUUID(),
    title,
    category,
    notes,
    completed: false,
    createdAt: new Date().toISOString(),
  };
}