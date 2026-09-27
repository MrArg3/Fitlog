"use client";
const icon = {
    cross: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4" aria-hidden="true">
            <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
    )
}
const RemoveButton = ({ onRemove }: { onRemove: () => void }) => {
    return (
        <button
            type="button"
            aria-label="Remove workout"
            onClick={onRemove}
            className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-white/10 hover:text-white"
        >
            {icon.cross}
        </button>
    );
};

export default RemoveButton;