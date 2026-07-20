import GoalCard from "./GoalCard";
import { AnimatePresence } from "framer-motion";
function GoalList({
  goals,
  onToggleComplete,
  onDelete,
  onEdit,
}) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence>
  {goals.map((goal) => (
    <GoalCard
      key={goal.id}
      goal={goal}
      onToggleComplete={onToggleComplete}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  ))}
</AnimatePresence>
    </div>
  );
}

export default GoalList;