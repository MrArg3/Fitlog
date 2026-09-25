import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import PlanButton from '@/components/workoutDetails/PlanButton';
import SaveButton from '@/components/workoutDetails/SaveButton';


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




const WorkoutDetails = async ({ params }: WorkoutDetailsProps) => {
    const { workoutID } = await params;
    const workoutData = await workoutApi();
    const workout = workoutData.find((workout: IWorkout) => String(workout.id) === String(workoutID));

    const workoutDetails = [
        {
            label: "Equipment",
            value: workout.equipment,
        },
        {
            label: "Difficulty",
            value: workout.difficulty,
        },
        {
            label: "Sets",
            value: workout.sets,
        },
        {
            label: "Reps",
            value: workout.reps,
        },
        {
            label: "Duration",
            value: `${workout.duration} min`,
        },
        {
            label: "Calories",
            value: `${workout.caloriesBurned} kcal`,
        },
        {
            label: "Rating",
            value: workout.rating,
        },
    ];
    return (
        <section className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">

                {/* Image */}
                <div className="w-full">
                    <Image
                        src={workout.image}
                        width={700}
                        height={600}
                        alt="Workout Image"
                        className="h-[280px] w-full rounded-2xl object-cover sm:h-[380px] md:h-[450px] lg:h-full lg:min-h-[600px]"
                    />
                </div>

                {/* Workout Content */}
                <div className="flex w-full flex-col">

                    {/* Title */}
                    <h2 className="font-oswald text-3xl uppercase sm:text-4xl lg:text-[36px]">
                        {workout.name}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 leading-relaxed text-gray-300">
                        {workout.description}
                    </p>

                    {/* Muscle Groups */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map(
                            (muscleGroup: string, index: number) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-[#C2F800] px-3 py-1 text-sm font-medium text-black"
                                >
                                    {muscleGroup}
                                </span>
                            )
                        )}
                    </div>

                    {/* Workout Details */}
                    <div className="mt-6">
                        <div className="overflow-hidden rounded-2xl border border-[#2a2d33] bg-[#1a1d23]">
                            {workoutDetails.map((detail, index) => (
                                <div
                                    key={detail.label}
                                    className={`grid grid-cols-2 px-4 py-3 sm:px-5 ${index !== workoutDetails.length - 1
                                        ? "border-b border-[#25282e]"
                                        : ""
                                        }`}
                                >
                                    <span className="font-oswald text-sm font-medium uppercase text-gray-300">
                                        {detail.label}
                                    </span>

                                    <span className="text-sm text-[#C2F800] sm:text-base">
                                        {detail.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h1 className="mb-4 font-oswald text-[24px] uppercase sm:text-[24px]">
                            Instructions
                        </h1>

                        <div className="space-y-2">
                            {workout.instructions.map(
                                (instruction: string, index: number) => (
                                    <p
                                        key={index}
                                        className="text-sm leading-relaxed text-gray-300 sm:text-base"
                                    >
                                        {index + 1}. {instruction}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <PlanButton workout={workout} />
                        <SaveButton workout={workout}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkoutDetails;