"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import WorkoutListCard from "@/components/shared/workoutListCard";
import { IWorkout } from "@/types/workout.type";
import WorkoutBlankCard from "@/components/shared/workoutBlankCard";

const Myplan = () => {
    const { myplan, saved } = useContext(WorkoutContext);
    const [activeTab, setActiveTab] = useState("plan");
    const currentData: IWorkout[] = activeTab === "plan" ? myplan : saved;

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-8">

                {/* WORKOUT HEADER */}
                <div>
                    <h1 className="font-oswald text-4xl text-white pb-2">
                        MY PLAN
                    </h1>

                    <p className="text-gray-400 text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>


                {/* WORKOUT COUNTER */}
                <div className="grid grid-cols-3 bg-[#1a1d23] rounded-2xl border border-gray-700/30">

                    {/* EXERCISES */}
                    <div className="px-6 py-4 border-r border-dashed border-gray-700">
                        <p className="text-sm text-gray-400">
                            Exercises
                        </p>

                        <p className="text-[32px] font-bold text-[#b2da00]">
                            {currentData.length}
                        </p>
                    </div>


                    {/* MINUTES */}
                    <div className="px-6 py-4 border-r border-dashed border-gray-700">
                        <p className="text-sm text-gray-400">
                            Minutes
                        </p>

                        <p className="text-[32px] font-bold text-white">
                            {currentData.reduce(
                                (total: number, workout: IWorkout) =>
                                    total + Number(workout.duration || 0),
                                0
                            )}
                        </p>
                    </div>


                    {/* CALORIES */}
                    <div className="px-6 py-4">
                        <p className="text-sm text-gray-400">
                            Calories
                        </p>

                        <p className="text-[32px] font-bold text-white">
                            {currentData.reduce(
                                (total: number, workout: IWorkout) =>
                                    total + Number(workout.calories ?? workout.caloriesBurned ?? 0),
                                0
                            )}
                        </p>
                    </div>

                </div>


                {/* TAB + SORT */}
                <div className="flex justify-between items-end gap-4">

                    {/* TAB */}
                    <div
                        role="tablist"
                        className="tabs tabs-box w-fit rounded-2xl"
                    >

                        {/* TODAY'S PLAN */}
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "plan"}
                            onClick={() => setActiveTab("plan")}
                            className={`tab rounded-xl border-0 transition duration-300 ${activeTab === "plan"
                                    ? "bg-[#0f1115] text-[#C2F800]"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>


                        {/* SAVED */}
                        <button
                            type="button"
                            role="tab"
                            aria-selected={activeTab === "saved"}
                            onClick={() => setActiveTab("saved")}
                            className={`tab rounded-xl border-0 transition duration-300 ${activeTab === "saved"
                                    ? "bg-[#0f1115] text-[#C2F800]"
                                    : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>


                    {/* SORT BY */}
                    <label className="form-control w-full max-w-xs">

                        <span className="label-text mb-1 text-gray-400">
                            Sort By
                        </span>

                        <select
                            className="select select-bordered rounded-2xl bg-[#1a1d23] text-white border-gray-700"
                            defaultValue="duration"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>
                    </label>
                </div>

                {/* WORKOUT LIST */}
                <div className="grid gap-4">
                    {currentData.length > 0 ? (
                        <ul className="space-y-4">
                            {currentData.map((workout: IWorkout) => (
                                <li key={workout.id}>
                                    <WorkoutListCard workout={workout} />
                                </li>
                            ))}
                        </ul>
                    ) : (<WorkoutBlankCard/>)}
                </div>
            </div>
        </section>
    );
};

export default Myplan;


