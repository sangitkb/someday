function DashboardHero({ onAddGoal }) {
  return (
    <section className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold">Your Bucket List</h1>
        <p className="mt-2 text-slate-600">
          Keep track of everything you want to do someday.
        </p>
      </div>

      <button
  onClick={onAddGoal}
  className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
>
  + Add Goal
</button>
    </section>
  );
}

export default DashboardHero;