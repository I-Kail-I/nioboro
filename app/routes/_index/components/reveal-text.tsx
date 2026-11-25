import React from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from 'cn';

type RevealTextProps = {
  text: string;
  /** Words rendered in a serif italic style, matching the emphasis in the design. */
  emphasis?: string[];
  className?: string;
};

const normalizeWord = (word: string) => word.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase();

export default function RevealText({ text, emphasis = [], className }: RevealTextProps) {
  const words = text.split(' ');
  const emphasizedWords = new Set(emphasis.map(normalizeWord));

  // Defining how the container controls the timing between words
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Defining how each letter will behave
  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={cn('flex flex-wrap gap-x-3 gap-y-1', className)}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={cn(
            emphasizedWords.has(normalizeWord(word)) && 'font-serif font-normal italic'
          )}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
