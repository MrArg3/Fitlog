import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
    title: "My Plan | Fitlog",
};

export default function MyPlanLayout({ children }: { children: ReactNode }) {
    return children;
}