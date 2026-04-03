"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";
import Panda from "./Panda";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [isPandaCovering, setIsPandaCovering] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto pt-12">
      <Panda isCoveringEyes={isPandaCovering} />
      <Card className="glass-card mt-4">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
          <CardDescription>
            Have a project in mind? Let&apos;s talk about it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setIsPandaCovering(false)}
                  required
                  placeholder="Nama"
                  className="pl-9 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setIsPandaCovering(false)}
                  required
                  placeholder="Email"
                  className="pl-9 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setIsPandaCovering(true)}
                  onBlur={() => setIsPandaCovering(false)}
                  required
                  placeholder="Tell me about your project..."
                  className="pl-9 min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            {status === "error" && <p className="text-center text-red-500 text-sm mt-2">Something went wrong. Please try again.</p>}
          </form>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
        <a href="https://linkedin.com/in/ergi-septiandi-p-05b896275" target="_blank" className="hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href="https://github.com/ergiseptiandi" target="_blank" className="hover:text-primary transition-colors">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
