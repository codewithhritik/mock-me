import { Header } from "@/components/Header";
import { InterviewSetupFormComponent } from "@/components/interview-setup-form";

export default function InterviewSetupPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">
                    Set Up Your Mock Interview
                </h1>
                <InterviewSetupFormComponent />
            </main>
        </>
    );
}
