function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="az">A → Z</option>
      <option value="za">Z → A</option>
      <option value="category">Category</option>
    </select>
  );
}

export default SortDropdown;