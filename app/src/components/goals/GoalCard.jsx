import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaRegCircle,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
function GoalCard({
  goal,
  onToggleComplete,
  onDelete,
  onEdit,
}) {
  return (
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.25 }}
  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
>      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {goal.title}
          </h3>

          <span className="mt-2 inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
            {goal.category}
          </span>
        </div>

        <button
  onClick={() => onToggleComplete(goal.id)}
  className="transition hover:scale-110"
>
  {goal.completed ? (
    <FaCheckCircle className="text-xl text-emerald-500" />
  ) : (
    <FaRegCircle className="text-xl text-slate-400" />
  )}
</button>     
      </div>

      {goal.notes && (
        <p className="mt-4 text-slate-600">
          {goal.notes}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between border-t pt-3">
  <div>
    <p className="text-sm text-slate-500">
      {format(new Date(goal.createdAt), "dd MMM yyyy")}
    </p>

    <span
      className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
        goal.completed
          ? "bg-emerald-100 text-emerald-700"
          : "bg-amber-100 text-amber-700"
      }`}
    >
      {goal.completed ? "Completed" : "Pending"}
    </span>
  </div>

  <div className="flex items-center gap-2">
  <button
    onClick={() => onEdit(goal)}
    className="rounded-lg p-2 text-indigo-600 transition hover:bg-indigo-50"
  >
    <FaEdit />
  </button>

  <button
    onClick={() => onDelete(goal.id)}
    className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
  >
    <FaTrash />
  </button>
</div>
</div>
    </motion.div>
  );
}

export default GoalCard;