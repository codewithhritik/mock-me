"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Upload, Mic, FileText, BarChart, Sun, Moon, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function LandingPageComponent() {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const handleGetStarted = () => {
        router.push("/interview-setup");
    };

    return (
        <div
            className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}
        >
            <main className="flex-grow">
                <HeroSection onGetStarted={handleGetStarted} />
                <FeaturesSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
            </main>
            <Footer />
        </div>
    );
}

function HeroSection({ onGetStarted }) {
    return (
        <section className="py-20 bg-gradient-to-b from-primary/20 to-background">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                    Master Your Interview Skills with AI
                </h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
                    Improve your confidence, clarity, and emotional intelligence
                    in interviews with our AI-powered mock interview experience.
                </p>
                <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={onGetStarted}
                >
                    Get Started
                </Button>
            </div>
        </section>
    );
}

function FeaturesSection() {
    const features = [
        {
            icon: <Mic className="h-10 w-10 text-primary" />,
            title: "Speech Analysis",
            description:
                "AI-powered analysis of your speech patterns and delivery.",
        },
        {
            icon: <BarChart className="h-10 w-10 text-primary" />,
            title: "Emotional Tone Detection",
            description:
                "Understand and improve your emotional intelligence during interviews.",
        },
        {
            icon: <FileText className="h-10 w-10 text-primary" />,
            title: "Personalized Feedback",
            description:
                "Receive tailored advice to enhance your interview performance.",
        },
    ];

    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    Features
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <CardHeader>
                                <div className="mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <CardTitle className="text-xl text-center">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HowItWorksSection() {
    const steps = [
        {
            title: "Upload Job Description",
            icon: <Upload className="h-10 w-10 text-primary" />,
        },
        {
            title: "Submit Your Resume",
            icon: <FileText className="h-10 w-10 text-primary" />,
        },
        {
            title: "Complete Mock Interview",
            icon: <Mic className="h-10 w-10 text-primary" />,
        },
        {
            title: "Receive AI Feedback",
            icon: <BarChart className="h-10 w-10 text-primary" />,
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card
                            key={index}
                            className="text-center transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <CardHeader>
                                <div className="mb-4 flex justify-center">
                                    {step.icon}
                                </div>
                                <CardTitle className="text-lg">
                                    {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Step {index + 1}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialsSection() {
    const testimonials = [
        {
            name: "Alex Johnson",
            role: "Software Engineer",
            content:
                "InterviewAI helped me land my dream job! The feedback on my speech patterns was invaluable.",
        },
        {
            name: "Sarah Lee",
            role: "Marketing Manager",
            content:
                "I never realized how much my tone affected my interviews. This tool is a game-changer!",
        },
        {
            name: "Michael Brown",
            role: "Data Analyst",
            content:
                "The personalized feedback helped me improve my interview skills significantly. Highly recommended!",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    What Our Users Say
                </h2>
                <Carousel className="w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            {testimonial.name}
                                        </CardTitle>
                                        <CardDescription>
                                            {testimonial.role}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">
                                            {testimonial.content}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="justify-center">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 text-primary fill-primary"
                                                />
                                            ))}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
}

function PricingSection() {
    const plans = [
        {
            name: "Basic",
            price: "$9.99",
            features: ["3 mock interviews", "Basic feedback", "Email support"],
        },
        {
            name: "Pro",
            price: "$19.99",
            features: [
                "Unlimited interviews",
                "Advanced feedback",
                "24/7 support",
                "Custom prompts",
            ],
        },
    ];

    return (
        <section id="pricing" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    Pricing
                </h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className="transition-all hover:shadow-lg hover:-translate-y-1"
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {plan.name}
                                </CardTitle>
                                <CardDescription className="text-3xl font-bold text-primary">
                                    {plan.price}
                                    <span className="text-sm font-normal text-muted-foreground">
                                        /month
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center"
                                        >
                                            <svg
                                                className="h-5 w-5 text-primary mr-2"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                                    Choose Plan
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const faqs = [
        {
            question: "How does the AI analyze my speech?",
            answer: "Our AI uses advanced natural language processing to analyze your speech patterns, tone, and content. It considers factors like clarity, confidence, and relevance to provide comprehensive feedback.",
        },
        {
            question: "Can I use my own job descriptions?",
            answer: "You can upload any job description you're interested in, and our AI will tailor the mock interview experience to that specific role.",
        },
        {
            question: "How accurate is the emotional tone detection?",
            answer: "Our emotional tone detection is highly accurate, trained on thousands of interview samples. It can detect subtle changes in your voice that indicate confidence, nervousness, or enthusiasm.",
        },
        {
            question: "Is my data kept confidential?",
            answer: "Yes, we take data privacy very seriously. All your personal information, resumes, and interview recordings are encrypted and never shared with third parties.",
        },
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    Frequently Asked Questions
                </h2>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-2xl mx-auto"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="border-t py-8 bg-muted">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>
                    &copy; {new Date().getFullYear()} InterviewAI. All rights
                    reserved.
                </p>
                <div className="mt-4 space-x-4">
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
