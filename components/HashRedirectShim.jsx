"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const HASH_ROUTES = {
  "#/": "/",
  "#/finops-services": "/finops-services",
  "#/finops-for-cloud-resellers": "/finops-for-cloud-resellers",
  "#/why-moneta": "/why-moneta",
  "#/privacy-policy": "/privacy-policy",
};

export default function HashRedirectShim() {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#/") return;
    const target = HASH_ROUTES[hash];
    if (target && target !== "/") {
      router.replace(target);
    }
  }, [router]);

  return null;
}
