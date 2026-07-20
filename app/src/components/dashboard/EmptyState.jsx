import { FaRegCompass } from "react-icons/fa";

function EmptyState() {
  return (
    <section className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
      <FaRegCompass className="mx-auto text-5xl text-slate-400" />

      <h2 className="mt-6 text-2xl font-semibold">
        No goals yet
      </h2>

      <p className="mt-2 text-slate-500">
        Start building your bucket list by adding your first goal.
      </p>
    </section>
  );
}

export default EmptyState;