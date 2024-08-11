import Modely from "@/components/model";
import { BentoGridDemo } from "@/layout/experience2";
import Experience from "@/layout/experience";

export default function Page() {
    return (
        <>
       <div className="flex items-center flex-col md:flex-row min-h-screen">
       <Experience />
       </div>
        </>
    );
}