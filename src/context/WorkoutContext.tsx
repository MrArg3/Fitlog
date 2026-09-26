"use client"
import React, { createContext, ReactNode, useState } from 'react';
import { IWorkout } from '@/types/workout.type';

type WorkoutContextType = {
    myplan: IWorkout[];
    setMyplan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    saved: IWorkout[];
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
};

export const WorkoutContext = createContext<WorkoutContextType>({
    myplan: [],
    setMyplan: () => undefined,
    saved: [],
    setSaved: () => undefined,
});

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [myplan, setMyplan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);

    const shareData: WorkoutContextType = {
        myplan,
        setMyplan,
        saved,
        setSaved,
    };

    return (
        <WorkoutContext.Provider value={shareData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;