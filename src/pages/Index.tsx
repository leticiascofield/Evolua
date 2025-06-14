
import AppMenu from "../components/AppMenu";
import { DailyCheckIn } from "../components/DailyCheckIn";
import { MoodTracker } from "../components/MoodTracker";
import { QuickShortcuts } from "../components/QuickShortcuts";
import { WellnessReminders } from "../components/WellnessReminders";
import { WeeklyPlanner } from "../components/WeeklyPlanner";
import { HabitTracker } from "../components/HabitTracker";
import { RewardSystem } from "../components/RewardSystem";
import { MenstrualWidget } from "../components/MenstrualWidget";
import { ContentHighlights } from "../components/ContentHighlights";
import { MentorshipCorner } from "../components/MentorshipCorner";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/80 via-white to-pink-100/60">
      <AppMenu />
      <main className="py-10 px-4">
        <section>
          <DailyCheckIn />
          <MoodTracker />
        </section>
        <QuickShortcuts />
        <WellnessReminders />
        <WeeklyPlanner />
        <HabitTracker />
        <RewardSystem />
        <MenstrualWidget />
        <ContentHighlights />
        <MentorshipCorner />
      </main>
    </div>
  );
};

export default Index;
