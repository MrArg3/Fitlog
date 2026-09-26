import React from 'react';
import WorkoutCard from './WorkoutCard';
import Link from 'next/link';
import { IWorkout } from '@/types/workout.type';

const workoutApi = async () => {
    // const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
      const res = await fetch('https://api.api-store.workers.dev/api/fitlog',{cache: 'force-cache'});
    const data = await res.json();
    return data;
};

const WorkoutLibrary = async () => {
    const workouts = await workoutApi();

    return (
        <section id="library" className="mx-auto mb-8 max-w-6xl p-[16px]">
            <div>
                <h2 className="font-oswald text-3xl text-white">THE LIBRARY</h2>

                <p className="mb-6 font-inter text-gray-300/75">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            <div className="grid cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout: IWorkout) => (
                    <Link href={`/workout/${workout.id}`} key={workout.id}>
                        <WorkoutCard workout={workout} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default WorkoutLibrary;