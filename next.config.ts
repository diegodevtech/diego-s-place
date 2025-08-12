import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://dsuiehxzanrlkilodxgt.supabase.co/storage/v1/object/public/cabin-images/**"
      ),
      new URL("https://lh3.googleusercontent.com/a/**"),
    ],
  },
  /* config options here */
};

export default nextConfig;
