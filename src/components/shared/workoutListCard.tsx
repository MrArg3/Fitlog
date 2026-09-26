import React from 'react';
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/dist/client/link';

type WorkoutListCardProps = {
    workout: IWorkout;
};

const WorkoutListCard = ({ workout }: WorkoutListCardProps) => {
    return (
        <div key={workout.id} className="bg-[#1a1d23] rounded-2xl border border-gray-700/30 p-5">
            {/* <div className="grid grid-cols-3 items-center"> */}
            <div className="flex flex-col gap-4 rounded-2xl border border-base-300 bg-base-200 p-4 sm:flex-row sm:items-center">

                <div>
                    <Image src={workout.image} alt={workout.name} width={200} height={200}
                        className="object-cover rounded-2xl" />
                </div>

                <div>
                    <h2 className="text-white text-xl font-semibold">{workout.name}</h2>
                    <p>{workout.equipment}</p>

                    <div>
                        <p> Duration: {workout.duration || 0} min </p>
                        <p> Calories: {workout.calories ?? workout.caloriesBurned ?? 0}</p>
                        <p> Rating: {workout.rating || 0}   </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-400">
                    <Link href={`/workout/${workout.id}`} className="btn btn-sm btn-outline btn-accent">
                        View Details
                    </Link>
                    <button className="btn btn-sm btn-outline btn-accent">
                        Mark as Done
                    </button>
                    <button className="btn btn-sm btn-outline btn-accent">
                        x
                        </button>
                </div>
            </div>

        </div>
    );
};

export default WorkoutListCard;



{/* {workout.category && (
    <p className="text-gray-400 text-sm mt-2"> {workout.category} </p>
)} */}