import React from "react";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";

const icon = {
    time: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#C2F800]"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
        </svg>
    ),

    kcal: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#C2F800]"
            aria-hidden="true"
        >
            <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
        </svg>
    ),

    rating: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-[#C2F800]"
            aria-hidden="true"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
        </svg>
    ),
};

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
    return (
        <section>
          <div className="font-inter overflow-hidden border-1 border-transparent hover:border-[#C2F800]/60 transition-all duration-300 rounded-2xl">
                <div className="w-full h-[200px] rounded-t-xl overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={250}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="bg-[#1a1d23] p-[20px] rounded-b-2xl flex flex-col gap-[10px] ">
                    <div>
                        {workout.muscleGroups.map((muscleGroup: string) => (
                            <span
                                key={muscleGroup}
                                className="bg-[#C2F800] text-black text-[12px] mr-2 px-2 rounded-[15px] inline-block"
                            >
                                {muscleGroup}
                            </span>
                        ))}
                    </div>

                    <div className="font-oswald text-white text-[20px] uppercase">
                        {workout.name}
                    </div>

                    <div className="text-gray-300/75 text-[14px]">
                        <p>{workout.equipment}</p>
                    </div>

                    <div className="flex mt-2 gap-4 text-[15px]">
                        <span className="flex items-center gap-1">
                            {icon.time}
                            {workout.duration}
                            <span>min</span>
                        </span>

                        <span className="flex items-center gap-1">
                            {icon.kcal}
                            {workout.caloriesBurned}
                            <span>kcal</span>
                        </span>

                        <span className="flex items-center gap-1">
                            {icon.rating}
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutCard;