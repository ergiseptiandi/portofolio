"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MessageSquare, Send, User } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "ergiputra321@gmail.com",
    href: "mailto:ergiputra321@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "ergi-septiandi-p-05b896275",
    href: "https://linkedin.com/in/ergi-septiandi-p-05b896275",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/ergiseptiandi",
    href: "https://github.com/ergiseptiandi",
    icon: Github,
  },
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]">
      <aside className="surface-card flex flex-col justify-between p-6 sm:p-8">
        <div>
          <p className="section-label text-[0.68rem]">Direct contact</p>
          <h3 className="mt-4 text-2xl font-semibold">Let&apos;s talk about the build.</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
            Share a short brief, a product problem, or the current bottleneck in your system.
            I usually work across interfaces, backend implementation, integrations, and delivery.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="surface-panel flex items-center gap-4 px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground/88">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </aside>

      <Card className="surface-card gap-0 border-none py-0 shadow-none">
        <CardHeader className="border-b border-border/60 px-6 py-6 sm:px-8">
          <CardTitle className="text-2xl font-semibold">Project inquiry</CardTitle>
          <CardDescription className="mt-2 max-w-xl text-sm leading-7">
            Tell me what you are building, what needs to improve, and the stack involved.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="h-12 rounded-2xl border-border/70 bg-background/72 pl-10"
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
                    required
                    placeholder="Your email"
                    className="h-12 rounded-2xl border-border/70 bg-background/72 pl-10"
                  />
                </div>
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
                  required
                  placeholder="Tell me about your project, timeline, or current bottleneck."
                  className="min-h-[160px] rounded-[1.35rem] border-border/70 bg-background/72 pl-10"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-muted-foreground" aria-live="polite">
                {status === "loading" && "Sending your message..."}
                {status === "success" && "Message sent successfully."}
                {status === "error" && "Something went wrong. Please try again."}
                {status === "idle" && "I usually reply with the next best technical step."}
              </p>

              <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="h-11 rounded-full px-6 text-sm font-semibold shadow-[0_18px_45px_-24px_rgba(39,83,214,0.56)]"
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message sent" : "Send message"}
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
