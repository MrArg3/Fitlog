import Link from 'next/link';

const WorkoutBlankCard = () => {
    return (
        <div className="bg-[#1a1d23] rounded-2xl border border-dashed border-gray-700/50 p-10 text-center">
                <h2 className="text-lg font-oswald uppercase text-white">Nothing here yet</h2>
                <p className="mt-2 text-[#a0a0a0]">Browse the library and add a lift to get today moving.</p>
                <Link href="/" >
                    <button className="bg-[#c4f000] text-[14px] font-semibold text-black px-4 py-2 rounded-2xl mt-[24px] hover:bg-[#b2da00]">Go to workouts</button>
                </Link>
        </div>
    );
};

export default WorkoutBlankCard;
