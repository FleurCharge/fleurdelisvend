'use client';

import { motion } from 'framer-motion';
import { Container } from '../container';

const venues = [
  { name: 'Gold\'s Gym', type: 'Fitness Centers' },
  { name: 'Harvard University', type: 'Educational Institutions' },
  { name: 'The Bellagio', type: 'Hospitality' },
  { name: 'Planet Fitness', type: 'Fitness Centers' },
  { name: 'Stanford University', type: 'Educational Institutions' },
  { name: 'MGM Resorts', type: 'Hospitality' },
];

export function TrustedVenues() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Trusted by Leading Venues
          </p>
          <h2 className="text-3xl font-bold text-foreground">
            Partnering with the Best
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg border border-border hover:border-accent transition-colors bg-card"
            >
              <p className="font-semibold text-foreground">{venue.name}</p>
              <p className="text-sm text-muted-foreground">{venue.type}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
