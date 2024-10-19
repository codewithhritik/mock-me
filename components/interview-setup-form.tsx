'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload } from "lucide-react"

export function InterviewSetupFormComponent() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Set Up Your Mock Interview</CardTitle>
        <CardDescription>Prepare for your next interview with AI-powered feedback</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="job-description">Job Description</Label>
            
            <Textarea id="job-description" placeholder="Paste the job description here" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume">Resume</Label>
            <div className="flex items-center space-x-2">
              <Input id="resume" type="file" accept=".pdf" className="flex-grow" />
              <Button type="button" size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="additional-prompt">Additional Prompt (Optional)</Label>
            <Textarea id="additional-prompt" placeholder="Any additional information or specific areas to focus on" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Start Mock Interview
        </Button>
      </CardFooter>
    </Card>
  )
}