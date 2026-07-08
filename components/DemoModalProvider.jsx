"use client";

import { createContext, useContext, useState, useCallback } from "react";
import DemoModal from "./DemoModal";

const DemoModalContext = createContext(null);

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <DemoModalContext.Provider value={open}>
      {children}
      <DemoModal isOpen={isOpen} onClose={close} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const open = useContext(DemoModalContext);
  if (!open) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return open;
}
