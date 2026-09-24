import React from 'react';
import { IWorkout } from '@/types/workout.type';


interface WorkoutDetailsProps {
    params: {
        workoutID: string;
    };
}

const workoutApi = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const WorkoutDetails = async ({params}: WorkoutDetailsProps) => {
    const { workoutID } = await params;
    const workoutData = await workoutApi();
    const workout = workoutData.find((workout: IWorkout) => String(workout.id) === String(workoutID));

    console.log(workout, "workout===>")

    return (
        <div>
            <h1 className="font-oswald text-3xl text-white ">Workout Details</h1>
            <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
    );
};

export default WorkoutDetails;