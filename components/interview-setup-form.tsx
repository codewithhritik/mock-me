"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";

export function InterviewSetupFormComponent() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        jobDescription: "",
        resume: null as File | null,
        additionalPrompt: "",
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const data = new FormData();
        data.append("jobDescription", formData.jobDescription);
        if (formData.resume) {
            data.append("resume", formData.resume);
        }
        data.append("additionalPrompt", formData.additionalPrompt);

        try {
            // Update this
            const response = await fetch("/api/interview-setup", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                // Update this too
                const result = await response.json();
                // Assuming the API returns an interview ID or session token
                router.push(`/interview?id=${result.interviewId}`);
            } else {
                // Handle error
                console.error("Failed to set up interview");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error setting up interview:", error);
            setIsLoading(false);
        }
    };

    return (
        <Card className="max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Set Up Your Mock Interview</CardTitle>
                <CardDescription>
                    Prepare for your next interview with AI-powered feedback
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="jobDescription">Job Description</Label>
                        <Textarea
                            id="jobDescription"
                            name="jobDescription"
                            placeholder="Paste the job description here"
                            value={formData.jobDescription}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="resume">Resume</Label>
                        <div className="flex items-center space-x-2">
                            <Input
                                id="resume"
                                name="resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="flex-grow"
                                onChange={handleFileChange}
                                required
                            />
                            <Button
                                type="button"
                                size="icon"
                                className="bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                <Upload className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="additionalPrompt">
                            Additional Prompt (Optional)
                        </Label>
                        <Textarea
                            id="additionalPrompt"
                            name="additionalPrompt"
                            placeholder="Any additional information or specific areas to focus on"
                            value={formData.additionalPrompt}
                            onChange={handleInputChange}
                        />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? "Preparing Interview..."
                            : "Start Mock Interview"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
