"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext } from "react";

const Myplan = () => {
    const { myplan, saved } = useContext(WorkoutContext);
    console.log("myplan list=>", myplan);
    console.log("saved list=>", saved);


    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col gap-8">

                <div className="">
                    <h1 className="font-oswald text-4xl text-white pb-2">MY PLAN</h1>
                    <p className="text-gray-400 text-sm">Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                {/* <PlanHeader/> */}
                {/* <Dropdown/> */}

                <div className="grid grid-cols-3 bg-[#1a1d23] rounded-2xl border border-gray-700/30 ">
                    <div className="px-6 py-8 border-r border-dashed border-gray-700">
                        <p className="text-sm text-gray-400">Exercises</p>
                        <p className="text-4xl font-bold">0</p>
                    </div>
                    <div className="px-6 py-8 border-r border-dashed border-gray-700">
                        <p className="text-sm text-gray-400">Minutes</p>
                        <p className="text-4xl font-bold">0</p>
                    </div>
                    <div className="px-6 py-8">
                        <p className="text-sm text-gray-400">Calories</p>
                        <p className="text-4xl font-bold">0</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Myplan;