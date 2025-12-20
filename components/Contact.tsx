"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, User } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Card className="glass-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
          <CardDescription>
            Have a project in mind? Let's talk about it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="name" placeholder="John Doe" className="pl-9 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
               <Label htmlFor="email">Email</Label>
               <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="john@example.com" className="pl-9 bg-background/50 border-primary/20 focus:border-primary/50 transition-colors" />
              </div>
            </div>
            
            <div className="space-y-2">
               <Label htmlFor="message">Message</Label>
               <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea id="message" placeholder="Tell me about your project..." className="pl-9 min-h-[120px] bg-background/50 border-primary/20 focus:border-primary/50 transition-colors" />
              </div>
            </div>
            
            <Button className="w-full rounded-full shadow-lg hover:shadow-primary/20 transition-all duration-300">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-8 flex justify-center gap-6 text-muted-foreground">
        <a href="#" className="hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          GitHub
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          Twitter
        </a>
      </div>
    </div>
  );
};

export default Contact;
