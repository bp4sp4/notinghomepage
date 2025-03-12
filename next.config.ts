import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 오류를 무시
  },
  images: {
    domains: ["assets.aceternity.com"], // 외부 이미지 도메인 추가
  },
  // config options here
};

export default nextConfig;
