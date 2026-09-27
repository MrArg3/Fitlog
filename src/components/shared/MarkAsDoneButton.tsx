"use client";
const MarkAsDoneButton = ({ onMarkAsDone }: { onMarkAsDone: () => void }) => {
    return (
        <button
            type="button"
            onClick={onMarkAsDone}
            className="flex items-center gap-1.5 rounded-full bg-[#c2f800] px-3 py-1.5 text-[10px] font-semibold text-black transition hover:bg-[#d4ff33]"
        >
            <span>✓</span>
            Mark as Done
        </button>
    );
};

export default MarkAsDoneButton;