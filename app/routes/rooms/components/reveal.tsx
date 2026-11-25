import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger in seconds, used when revealing a group of items. */
  delay?: number;
};

/**
 * Shared, below-the-fold entrance animation.
 *
 * The hero is intentionally left static so the largest paint (headline and
 * image) is not held back by an opacity transition. Motion is skipped entirely
 * when the visitor has asked for reduced motion.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : delay,
        ease: EASE,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
