'use client';

import { Container } from '../container';
import { Button } from '../button';

export function Header() {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-bold text-accent-foreground">
            ✦
          </div>
          <span className="text-xl font-bold text-foreground">Fleur Charge</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-foreground hover:text-accent transition-colors">
            Benefits
          </a>
          <a href="#faq" className="text-foreground hover:text-accent transition-colors">
            FAQ
          </a>
        </nav>
        <Button size="md" onClick={scrollToForm}>
          Get Started
        </Button>
      </Container>
    </header>
  );
}
