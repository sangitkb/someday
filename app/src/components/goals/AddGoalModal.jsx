import GoalForm from "./GoalForm";

function AddGoalModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add Goal</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

<GoalForm
  onSubmit={onSubmit}
  initialData={initialData}
/>      </div>
    </div>
  );
}

export default AddGoalModal;