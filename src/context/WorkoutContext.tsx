"use client"
import React, { createContext, ReactNode, useEffect, useState } from 'react';
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
    const [hasHydrated, setHasHydrated] = useState(false);

    useEffect(() => {
        try {
            const storedPlan = localStorage.getItem('fitlog-myplan');
            const storedSaved = localStorage.getItem('fitlog-saved');

            if (storedPlan) {
                const parsedPlan: unknown = JSON.parse(storedPlan);
                if (Array.isArray(parsedPlan)) setMyplan(parsedPlan);
            }

            if (storedSaved) {
                const parsedSaved: unknown = JSON.parse(storedSaved);
                if (Array.isArray(parsedSaved)) setSaved(parsedSaved);
            }
        } catch {
            localStorage.removeItem('fitlog-myplan');
            localStorage.removeItem('fitlog-saved');
        } finally {
            setHasHydrated(true);
        }
    }, []);

    useEffect(() => {
        if (!hasHydrated) return;

        localStorage.setItem('fitlog-myplan', JSON.stringify(myplan));
        localStorage.setItem('fitlog-saved', JSON.stringify(saved));
    }, [hasHydrated, myplan, saved]);

    const shareData = {
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