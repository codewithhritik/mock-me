"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, PhoneOff } from "lucide-react";

export function InterviewInterface() {
    const [isMuted, setIsMuted] = useState(false);
    const [isSessionEnded, setIsSessionEnded] = useState(false);
    const [isUserSpeaking, setIsUserSpeaking] = useState(false);
    const circleAnimation = useAnimation();
    const audioContext = useRef<AudioContext | null>(null);
    const analyser = useRef<AnalyserNode | null>(null);
    const dataArray = useRef<Uint8Array | null>(null);
    const animationFrameId = useRef<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        audioContext.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)();
        analyser.current = audioContext.current.createAnalyser();
        analyser.current.fftSize = 256;
        dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);

        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
                const source =
                    audioContext.current!.createMediaStreamSource(stream);
                source.connect(analyser.current!);
            })
            .catch((err) =>
                console.error("Error accessing media devices:", err)
            );

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            if (audioContext.current) {
                audioContext.current.close();
            }
        };
    }, []);

    useEffect(() => {
        const checkAudio = () => {
            if (analyser.current && dataArray.current) {
                analyser.current.getByteFrequencyData(dataArray.current);
                const sum = dataArray.current.reduce((a, b) => a + b, 0);
                const average = sum / dataArray.current.length;
                const isSpeaking = average > 20; // Adjust this threshold as needed

                setIsUserSpeaking(isSpeaking);
                circleAnimation.start(
                    isSpeaking ? { scale: 1.2 } : { scale: 1 }
                );
            }
            animationFrameId.current = requestAnimationFrame(checkAudio);
        };

        checkAudio();

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [circleAnimation]);

    const toggleMute = () => setIsMuted(!isMuted);
    const endSession = () => setIsSessionEnded(true);

    if (isSessionEnded) {
        return (
            <div className="flex items-center justify-center h-screen bg-background">
                <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Interview Session Ended
                    </h2>
                    <p>
                        Thank you for participating. You will receive feedback
                        shortly.
                    </p>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen bg-background">
            <main className="flex-grow flex items-center justify-center relative">
                <motion.div
                    className="w-40 h-40 rounded-full bg-primary/20"
                    animate={circleAnimation}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className="absolute bottom-4 right-4 w-64 h-48 bg-muted rounded-lg overflow-hidden shadow-lg">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted={isMuted}
                        playsInline
                    />
                </div>
            </main>
            <footer className="p-6 flex justify-center space-x-6">
                <Button
                    variant={isMuted ? "destructive" : "secondary"}
                    size="lg"
                    className="w-16 h-16 rounded-full"
                    onClick={toggleMute}
                >
                    {isMuted ? (
                        <MicOff className="h-8 w-8" />
                    ) : (
                        <Mic className="h-8 w-8" />
                    )}
                </Button>
                <Button
                    variant="destructive"
                    size="lg"
                    className="w-16 h-16 rounded-full"
                    onClick={endSession}
                >
                    <PhoneOff className="h-8 w-8" />
                </Button>
            </footer>
        </div>
    );
}
