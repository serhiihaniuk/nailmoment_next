"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export let lenis: any = null;

export const LenisScroll = () => {
  useEffect(() => {
    lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null;
};
