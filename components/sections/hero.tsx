'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../container';
import { Button } from '../button';

export function Hero() {
  const [displayStats, setDisplayStats] = useState({
    revenue: 0,
    venues: 0,
    uptime: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayStats((prev) => ({
        revenue: Math.min(prev.revenue + 45, 2800),
        venues: Math.min(prev.venues + 12, 450),
        uptime: Math.min(prev.uptime + 0.5, 99.9),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/30">
            <span className="text-accent font-semibold text-sm">Premium Revenue Stream</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Charge Phones. Generate Revenue.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Premium phone charging kiosks for gyms, colleges, casinos, and hospitality venues. Passive revenue with zero operational overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToForm}>
              Start Earning Today
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 md:gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              ${displayStats.revenue.toFixed(0)}
            </div>
            <p className="text-sm text-muted-foreground">Avg Monthly Revenue per Kiosk</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {displayStats.venues.toFixed(0)}+
            </div>
            <p className="text-sm text-muted-foreground">Active Venue Partners</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
              {displayStats.uptime.toFixed(1)}%
            </div>
            <p className="text-sm text-muted-foreground">Platform Uptime</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
