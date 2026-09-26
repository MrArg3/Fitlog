"use client"
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const icon = {
    save: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark h-4 w-4" aria-hidden="true"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path></svg>
}



const SaveButton = ({ workout }: { workout: IWorkout }) => {

    const { saved, setSaved } = useContext(WorkoutContext);

    const handleAddToSaved = () => {
        const existingWorkout = saved.find((workoutData: IWorkout) => String(workoutData.id) === String(workout.id))
        if (existingWorkout) {
            toast.error("Already in your saved list", {
                style: {
                    background: '#1a1d23',
                    color: '#fff',
                },
            })
            return;
        }
        setSaved([...saved, workout])
        toast.success("Saved for later", {
            style: {
                background: '#1a1d23',
                color: '#fff',
            },
        })
    }

    return (
        <div>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl 
            border border-white px-4 py-2 transition-colors duration-300 hover:bg-[#17191f] sm:w-auto"
                onClick={() => handleAddToSaved()}>
                <span className="flex items-center" >
                    {icon.save}
                </span>
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SaveButton;