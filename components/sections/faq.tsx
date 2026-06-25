'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../container';

const faqs = [
  {
    question: 'What venues are eligible for Fleur Charge?',
    answer: 'We partner with gyms, fitness centers, colleges, universities, casinos, hotels, bars, restaurants, and any high-traffic venue. Minimum traffic requirement is 500+ daily visitors.',
  },
  {
    question: 'How much does it cost to get started?',
    answer: 'Zero upfront cost. No installation fees, no equipment charges. We handle everything. You simply earn 50% of revenue from day one.',
  },
  {
    question: 'How is revenue calculated?',
    answer: 'Revenue is based on actual charges made through the kiosk. Each charge costs customers $2-3 depending on device type. You earn 50% directly, with transparent tracking via your dashboard.',
  },
  {
    question: 'What if the kiosk breaks?',
    answer: 'We provide 24/7 technical support and will replace or repair any equipment at no cost. Our kiosks have 99.9% uptime SLA.',
  },
  {
    question: 'Can I remove the kiosk if I\'m unhappy?',
    answer: 'Yes. There are no long-term contracts. You can cancel anytime with 30 days notice. We\'ll remove the kiosk free of charge.',
  },
  {
    question: 'How do I get paid?',
    answer: 'Revenue is paid monthly via direct deposit to your business account. Payments are typically processed on the first business day of each month.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-accent font-semibold uppercase tracking-wide mb-2">
            Questions & Answers
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border border-border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-card hover:bg-secondary transition-colors flex items-center justify-between text-left"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-accent text-xl">▼</span>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-border"
                  >
                    <p className="px-6 py-4 text-muted-foreground bg-background">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
