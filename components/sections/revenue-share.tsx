'use client';

import { motion } from 'framer-motion';
import { Container } from '../container';

export function RevenueShare() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Revenue Split</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50%</div>
                <p className="text-sm opacity-90">You Earn</p>
                <p className="text-xs opacity-75 mt-2">From every charge</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-4xl">+</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50%</div>
                <p className="text-sm opacity-90">Fleur Charge</p>
                <p className="text-xs opacity-75 mt-2">Operations & Support</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Example Monthly Earnings</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>200 charges per month</span>
                  <span className="font-semibold">$2,000 total revenue</span>
                </div>
                <div className="flex justify-between">
                  <span>Your share (50%)</span>
                  <span className="font-semibold text-accent">$1,000 per month</span>
                </div>
              </div>
            </div>

            <p className="text-sm opacity-90 mt-8">
              No hidden fees. No long-term contracts. Cancel anytime with 30 days notice.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
