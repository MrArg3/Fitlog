import React from 'react';
import WorkoutCard from './WorkoutCard';
import Link from 'next/dist/client/link';

const workoutApi = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const WorkoutLibrary = async() => {
    const workouts = await workoutApi();
    return (
        <section className="max-w-6xl mx-auto  p-[16px]">
            <div>

            <h2 className="font-oswald text-3xl text-white ">THE LIBRARY</h2>
            <p className="text-gray-300/75 font-inter mb-6">
                Twelve lifts covering every major muscle group.
            </p>
            </div>
            <div className="cursor-pointer grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    workouts.map((workout: any) => (
                        <Link href={`/workout/${workout.id}`} key={workout.id}>
                            <WorkoutCard workout={workout} />
                        </Link>
                    ))
                }
                </div>
         
        </section>
    );
};

export default WorkoutLibrary;