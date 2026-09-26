"use client"
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";

type WorkoutListCardProps = {
    workout: IWorkout;
    onRemove: () => void;
};

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
    cross: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x h-4 w-4" aria-hidden="true">
        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>)
};


const WorkoutListCard = ({ workout, onRemove }: WorkoutListCardProps) => {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-[#2b2e36] bg-[#1a1d23] p-3 sm:flex-row sm:items-center sm:p-4">

            {/* Workout Image */}
            <div className="shrink-0">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={120}
                    height={80}
                    className="h-20 w-30 rounded-2xl object-cover"
                />
            </div>

            {/* Workout Information */}
            <div className="min-w-0 flex-1">
                <h2 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                    {workout.name}
                </h2>

                <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                    {workout.equipment}
                </p>

                {/* Workout Stats */}
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-300 sm:text-sm">

                    <span className="flex items-center gap-1">
                        <span className="text-[#c2f800]">{icon.time}</span>
                        {workout.duration || 0} min
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[#c2f800]">{icon.kcal}</span>
                        {workout.calories ?? workout.caloriesBurned ?? 0} kcal
                    </span>

                    <span className="flex items-center gap-1">
                        <span className="text-[#c2f800]">{icon.rating}</span>
                        {workout.rating || 0}
                    </span>

                </div>
            </div>

            {/* Buttons */}
            <div className="flex shrink-0 items-center gap-2 sm:ml-auto">

                {/* View Details */}
                <Link
                    href={`/workout/${workout.id}`}
                    className="rounded-full border border-gray-400 px-3 py-1.5 text-[10px] font-medium text-white transition hover:border-white hover:bg-white hover:text-black sm:px-4 sm:py-2"
                >
                    View Details
                </Link>


                {/* Remove */}
                <button
                    type="button"
                    aria-label="Remove workout"
                    onClick={onRemove}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
                >
                    {icon.cross}
                </button>

            </div>
        </div>
    );
};

export default WorkoutListCard;