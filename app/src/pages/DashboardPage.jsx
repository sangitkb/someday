import { useState } from "react";

import DashboardHero from "../components/dashboard/DashboardHero";
import StatsGrid from "../components/dashboard/StatsGrid";
import EmptyState from "../components/dashboard/EmptyState";
import AddGoalModal from "../components/goals/AddGoalModal";

function DashboardPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <DashboardHero onAddGoal={() => setIsModalOpen(true)} />

      <StatsGrid />

      <EmptyState />

      <AddGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default DashboardPage;