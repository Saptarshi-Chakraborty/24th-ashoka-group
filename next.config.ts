import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // NOTE: Removing custom `distDir` because Vercel and Next.js build pipelines
  // expect the default `.next` output directory. Using a custom `distDir` such
  // as `out` caused the Vercel builder to look for `.next/routes-manifest.json`
  // and fail when it wasn't present. If you need a custom output directory for
  // local experiments, make it conditional on an env var.
};

export default nextConfig;
