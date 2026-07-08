"use client";

import Button from "./ui/Button";
import { useDemoModal } from "./DemoModalProvider";

export default function DemoCtaButton({ children, ...rest }) {
  const openDemo = useDemoModal();
  return (
    <Button onClick={openDemo} {...rest}>
      {children}
    </Button>
  );
}
