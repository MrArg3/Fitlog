
import Image from 'next/image';
import banner from '@/app/assets/banner.png';
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="p-[16px]">
            <div className="font-oswald max-w-6xl mx-auto items-center justify-between bg-[#1a1d23] rounded-3xl grid gap-10 p-8 lg:grid-cols-2 lg:p-12 ">
                <div>
                    <p className="tracking-tight text-[14px] text-[#b2da00] my-[20px]">WORKOUT LIBRARY</p>
                    <h1 className="leading-tight text-[48px]  text-white my-[20px]">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="max-w-md text-gray-300/75 font-inter my-[20px]">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <a href="#library" className="font-inter bg-[#b2da00] font-medium text-black text-[14px]  py-2 px-4 rounded-xl hover:bg-[#a0c500] transition duration-300">Browse Workouts</a>
                </div>
                    <Image
                        src={banner}
                        alt="Banner"
                        width={500}
                        height={400}
                    />
            </div>
        </section>
    );
};

export default Banner;