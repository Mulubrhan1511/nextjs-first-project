'use client';

import { useRouter } from "next/navigation";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export default function About() {
    const router = useRouter();
    return (
        <>
        <div style={{ paddingBottom: "230vh" }}> 
            <h1 className="text-4xl font-bold">About Page</h1>
            <MacbookScroll />
            
        </div>
        <h1>Yes</h1>
        <h1>Yes</h1>
        <h1>Yes</h1>
        <h1>Yes</h1>
        <h1>Yes</h1>
        </>
    );
}
