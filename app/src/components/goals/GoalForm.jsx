import { useState } from "react";
import { CATEGORIES } from "../../constants/categories";

function GoalForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
const [category, setCategory] = useState(
  initialData?.category || CATEGORIES[0]
);
const [notes, setNotes] = useState(initialData?.notes || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) return;

   onSubmit({
  ...initialData,
  title,
  category,
  notes,
});
    setTitle("");
    setCategory(CATEGORIES[0]);
    setNotes("");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="mb-2 block text-sm font-medium">
          Goal Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Visit Japan"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
        >
          {CATEGORIES.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Notes
        </label>

        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Optional notes..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700"
      >
{initialData ? "Update Goal" : "Save Goal"}     
 </button>
    </form>
  );
}

export default GoalForm;