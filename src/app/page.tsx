import { Suspense } from "react";
import Banner from "@/components/home/Banner";
import WorkeroutLibrary from "@/components/home/WorkoutLibrary";

function WorkoutLoading() {
  return (

    <section id="library" className="mx-auto mb-8 max-w-6xl p-[16px]">
      <h2 className="font-oswald text-3xl text-white">THE LIBRARY</h2>
      <p className="mb-6 font-inter text-gray-300/75">
        Twelve lifts covering every major muscle group.
      </p>

      <div
        className="flex min-h-48 flex-col items-center justify-center gap-4"
        role="status"
        aria-live="polite"
      >
        <div className="h-9 w-9 animate-spin rounded-full border-4 border-[#30343c] border-t-[#C4F000]" />
        <p className="font-inter text-sm text-gray-300">Loading workouts...</p>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<WorkoutLoading />}>
        <WorkeroutLibrary />
      </Suspense>
    </div>
  );
}
