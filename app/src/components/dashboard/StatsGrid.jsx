import StatsCard from "./StatsCard";

function StatsGrid({ goals }) {
  const totalGoals = goals.length;
  const completedGoals = goals.filter((goal) => goal.completed).length;
  const pendingGoals = totalGoals - completedGoals;

  return (
    <section className="grid gap-6 md:grid-cols-3">
      <StatsCard title="Total Goals" value={totalGoals} />
      <StatsCard title="Completed" value={completedGoals} />
      <StatsCard title="Pending" value={pendingGoals} />
    </section>
  );
}

export default StatsGrid;