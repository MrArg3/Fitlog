"use client"
import React, {createContext, ReactNode, useState} from 'react';

const WorkoutContext = createContext({});

const WorkoutProvider = ({children}: { children: ReactNode}) => {
    const [myplan, setMyplan] = useState([]);
    const [saved, setSaved] = useState([]);

    const shareData = {
        myplan,
        setMyplan,
        saved,
        setSaved
    };
    return (
    <WorkoutContext.Provider value={shareData}>{children}</WorkoutContext.Provider>
    );
        
};

export default WorkoutProvider;