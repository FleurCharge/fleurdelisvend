'use client';

import { motion } from 'framer-motion';
import { Container } from '../container';
import { Card } from '../card';

const benefits = [
  {
    title: 'Passive Revenue',
    description: 'Earn money 24/7 with zero effort. We handle maintenance and support.',
    icon: '💰',
  },
  {
    title: 'Enhanced Guest Experience',
    description: 'Keep guests happy and connected. Increases venue satisfaction scores.',
    icon: '😊',
  },
  {
    title: 'Zero Operational Cost',
    description: 'No maintenance, no restocking, no hassle. We manage everything.',
    icon: '⚙️',
  },
  {
    title: 'Premium Branding',
    description: 'Luxury kiosk design that complements your venue aesthetic.',
    icon: '✨',
  },
  {
    title: 'Real-Time Analytics',
    description: 'Dashboard with usage data, revenue tracking, and insights.',
    icon: '📊',
  },
  {
    title: 'Dedicated Support',
    description: '24/7 customer support team ready to help whenever you need.',
    icon: '🤝',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-secondary/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Why Choose Fleur Charge
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Benefits That Matter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just revenue—a complete business solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
