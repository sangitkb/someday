import { useEffect, useState } from "react";
import GoalList from "../components/goals/GoalList";
import DashboardHero from "../components/dashboard/DashboardHero";
import StatsGrid from "../components/dashboard/StatsGrid";
import EmptyState from "../components/dashboard/EmptyState";
import AddGoalModal from "../components/goals/AddGoalModal";
import SearchBar from "../components/dashboard/SearchBar";
import { getGoals, saveGoals } from "../services/goalService";
import SortDropdown from "../components/dashboard/SortDropdown";
function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  useEffect(() => {
    setGoals(getGoals());
  }, []);
function handleAddGoal(goal) {
  if (goal.id) {
    const updatedGoals = goals.map((g) =>
      g.id === goal.id ? goal : g
    );

    setGoals(updatedGoals);
    saveGoals(updatedGoals);
  } else {
    const newGoal = {
      ...goal,
      id: crypto.randomUUID(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const updatedGoals = [...goals, newGoal];

    setGoals(updatedGoals);
    saveGoals(updatedGoals);
  }

  setSelectedGoal(null);
  setIsModalOpen(false);
}
  function handleToggleComplete(id) {
  const updatedGoals = goals.map((goal) =>
    goal.id === id
      ? { ...goal, completed: !goal.completed }
      : goal
  );

  setGoals(updatedGoals);
  saveGoals(updatedGoals);
}
function handleDeleteGoal(id) {
  const confirmed = window.confirm(
    "Delete this goal?"
  );

  if (!confirmed) return;

  const updatedGoals = goals.filter(
    (goal) => goal.id !== id
  );

  setGoals(updatedGoals);
  saveGoals(updatedGoals);
}
function handleEditGoal(goal) {
  setSelectedGoal(goal);
  setIsModalOpen(true);
}
const filteredGoals = goals
  .filter((goal) => {
    const query = searchTerm.toLowerCase();

    return (
      goal.title.toLowerCase().includes(query) ||
      goal.category.toLowerCase().includes(query) ||
      goal.notes.toLowerCase().includes(query)
    );
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "oldest":
        return (
          new Date(a.createdAt) -
          new Date(b.createdAt)
        );

      case "az":
        return a.title.localeCompare(b.title);

      case "za":
        return b.title.localeCompare(a.title);

      case "category":
        return a.category.localeCompare(b.category);

      case "newest":
      default:
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
    }
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<DashboardHero
  onAddGoal={() => {
    setSelectedGoal(null);
    setIsModalOpen(true);
  }}
/>
      <StatsGrid goals={goals} />
<div className="my-6 flex flex-col gap-4 md:flex-row">
  <div className="flex-1">
    <SearchBar
      value={searchTerm}
      onChange={setSearchTerm}
    />
  </div>

  <SortDropdown
    value={sortBy}
    onChange={setSortBy}
  />
</div>
     {filteredGoals.length === 0 ? (
  <EmptyState />
) : (
  <GoalList
  goals={filteredGoals}
  onToggleComplete={handleToggleComplete}
  onDelete={handleDeleteGoal}
  onEdit={handleEditGoal}
/>
)}
      <AddGoalModal
  isOpen={isModalOpen}
  onClose={() => {
    setSelectedGoal(null);
    setIsModalOpen(false);
  }}
  onSubmit={handleAddGoal}
  initialData={selectedGoal}
/>
    </div>
  );
}

export default DashboardPage;