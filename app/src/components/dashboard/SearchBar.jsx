function SearchBar({ value, onChange }) {
  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="Search goals..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}

export default SearchBar;