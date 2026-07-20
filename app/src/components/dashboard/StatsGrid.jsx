import StatsCard from "./StatsCard";

function StatsGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <StatsCard title="Total Goals" value={0} />
      <StatsCard title="Completed" value={0} />
      <StatsCard title="Pending" value={0} />
    </section>
  );
}

export default StatsGrid;