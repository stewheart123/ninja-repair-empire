"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, User } from "lucide-react";

// Get the Google Apps Script Web App URL from environment variables
// Set this in your .env file as VITE_GOOGLE_APPS_SCRIPT_URL
const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL ||
  (() => {
    if (import.meta.env.DEV) {
      console.warn(
        "VITE_GOOGLE_APPS_SCRIPT_URL is not set. Please add it to your .env file."
      );
    }
    return "";
  })();

export const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!name || name.trim().length === 0) {
      toast({
        title: "Name required",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Check if URL is configured
    if (!GOOGLE_APPS_SCRIPT_URL) {
      toast({
        title: "Configuration error",
        description: "Form submission is not configured. Please contact support.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send data to Google Apps Script Web App
      // Using no-cors mode because Google Apps Script doesn't support CORS headers
      // We'll handle success optimistically since we can't read the response
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      // With no-cors, we can't read the response, so we show success optimistically
      // The data will still be saved to the sheet
      toast({
        title: "Success!",
        description: "You are on the list. I will email you when the course launches.",
      });
      setName("");
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 h-12 bg-secondary border-border focus:border-primary focus:ring-primary"
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 bg-secondary border-border focus:border-primary focus:ring-primary"
            disabled={isSubmitting}
            required
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[var(--glow-orange)] transition-all hover:shadow-[var(--glow-orange)] hover:scale-105"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </div>
    </form>
  );
};
