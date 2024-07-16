"use client"
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};