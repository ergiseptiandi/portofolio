"use client";

import React from "react";

import { Button } from "@/components/ui/button";
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
    value: "ergi-septiandi-p",
    href: "https://linkedin.com/in/ergi-septiandi-p-05b896275",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "ergiseptiandi",
    href: "https://github.com/ergiseptiandi",
    icon: Github,
  },
];

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [csrfToken, setCsrfToken] = React.useState("");

  React.useEffect(() => {
    fetch("/api/contact")
      .then((res) => res.json())
      .then((data) => setCsrfToken(data.csrfToken))
      .catch(() => {});
  }, []);

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
        body: JSON.stringify({ ...formData, csrfToken }),
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
    <div className="grid gap-8 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)]">
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="section-label">Direct contact</p>
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white">
            Let&apos;s work together.
          </h3>
          <p className="text-sm leading-[1.7] text-[#b0b0b0]">
            Reach out directly or fill in the form. I usually respond within a day.
          </p>
        </div>
        <div className="space-y-2">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] px-4 py-4 transition-all duration-200 hover:border-[rgba(0,245,255,0.15)] hover:bg-[rgba(0,245,255,0.02)]"
            >
              <div className="rounded-lg bg-[rgba(0,245,255,0.08)] p-2.5 text-[#00f5ff] transition-colors duration-200 group-hover:bg-[rgba(0,245,255,0.12)]">
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-[family-name:var(--font-jetbrains)] text-[0.58rem] uppercase tracking-[0.25em] text-[#888]">
                  {label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#e0e0e0]">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-xl sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-[family-name:var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#555]" />
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="h-11 rounded-lg border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] pl-10 text-sm text-[#e0e0e0] placeholder:text-[#555] focus:border-[rgba(0,245,255,0.3)]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-[family-name:var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#555]" />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="h-11 rounded-lg border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] pl-10 text-sm text-[#e0e0e0] placeholder:text-[#555] focus:border-[rgba(0,245,255,0.3)]"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="font-[family-name:var(--font-jetbrains)] text-[0.65rem] uppercase tracking-[0.15em] text-[#888]">
              Message
            </Label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-[#555]" />
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What are you building?"
                className="min-h-[140px] rounded-lg border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] pl-10 text-sm text-[#e0e0e0] placeholder:text-[#555] focus:border-[rgba(0,245,255,0.3)]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#888]" aria-live="polite">
              {status === "loading" && "Sending..."}
              {status === "success" && "Message sent."}
              {status === "error" && "Failed to send. Try again."}
              {status === "idle" && "I usually reply within 24h."}
            </p>
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="h-11 rounded-full bg-[#00f5ff] px-6 text-sm font-bold text-[#0a0a0a] shadow-[0_0_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.3)]"
            >
              {status === "loading" ? "Sending..." : status === "success" ? "Sent" : "Send message"}
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
