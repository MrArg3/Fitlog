import Link from "next/link";
const icon = {
    NotFound: <svg viewBox="0 0 320 240" className="w-full max-w-sm" role="img" aria-label="Stylized gym illustration with a barbell"><rect width="320" height="240" rx="24" fill="#1A1D23"></rect><rect x="24" y="24" width="272" height="192" rx="16" fill="#0F1115" stroke="#2A2E38"></rect><circle cx="86" cy="120" r="34" fill="#252830" stroke="#C4F000" strokeWidth="4"></circle><circle cx="234" cy="120" r="34" fill="#252830" stroke="#C4F000" strokeWidth="4"></circle><rect x="112" y="112" width="96" height="16" rx="4" fill="#C4F000"></rect><rect x="48" y="104" width="14" height="32" rx="3" fill="#E8EAEF"></rect><rect x="258" y="104" width="14" height="32" rx="3" fill="#E8EAEF"></rect></svg>
}
export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <div className="flex flex-col items-center gap-6 py-16 text-center">

                <div>
                    {icon.NotFound}
                </div>
                <p className="font-oswald text-5xl font-medium uppercase text-[#C4F000]">404</p>
                <h1 className="mt-3 font-oswald text-4xl uppercase text-white sm:text-5xl">
                    Page not found
                </h1>
                <p className="mt-4 max-w-md text-gray-400">
                    The page you wanted is not in the library. Head back to the floor and pick a workout that exists.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#C4F000] px-5 py-3 font-medium text-black transition-colors hover:bg-[#A8D600]"
                >
                    Back to workouts
                </Link>
            </div>
        </section>
    );
}