'use client';

import { motion } from 'framer-motion';
import { Container } from '../container';

const steps = [
  {
    number: '01',
    title: 'Partner with Fleur Charge',
    description: 'Submit your venue details and get approved within 48 hours. Minimal documentation required.',
  },
  {
    number: '02',
    title: 'Receive Your Kiosk',
    description: 'We deliver, install, and set up the charging station. Takes less than 2 hours.',
  },
  {
    number: '03',
    title: 'Customer Usage',
    description: 'Guests charge their phones, earn points for your loyalty program. They love it.',
  },
  {
    number: '04',
    title: 'Monthly Revenue',
    description: 'You earn 50% of revenue. Payments deposited directly to your account.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Our Process
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Getting Started is Simple
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four straightforward steps to start generating revenue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-accent text-accent-foreground font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
