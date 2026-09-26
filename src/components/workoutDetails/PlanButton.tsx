"use client"

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { toast } from "react-hot-toast";


const icon = {
    calender: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-plus h-4 w-4" aria-hidden="true"><path d="M16 18h6"></path><path d="M16 2v3"></path><path d="M19 15v6"></path><path d="M21 11.5V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h8.3"></path><path d="M3 9h18"></path><path d="M8 2v3"></path></svg>,
}

const PlanButton = ({ workout }: { workout: IWorkout }) => {

    const { myplan, setMyplan } = useContext(WorkoutContext);
    const handleAddToPlan = () => {
        const existingWorkout = myplan.find((workoutData: IWorkout) => String(workoutData.id) === String(workout.id))

        if (existingWorkout) {
            toast.error("Already in your plan", {
                style: {
                    background: '#1a1d23',
                    color: '#fff',
                },
            })
            return;
        }

        setMyplan([...myplan, workout]);
        toast.success("Added to today's plan", {
            style: {
                background: '#1a1d23',
                color: '#fff',
            },
        })
    }
    return (
        <button className="flex w-full items-center justify-center rounded-2xl bg-[#C2F800] px-4 py-2 text-black transition-colors duration-300 hover:bg-[#A8D600] sm:w-auto" onClick={() => handleAddToPlan()}>
            <span className="mr-2 flex items-center">
                {icon.calender}
            </span>

            <span className="font-medium">
                Add to today&apos;s plan
            </span>
        </button>
    );
}

export default PlanButton;