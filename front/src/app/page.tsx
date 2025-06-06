"use client";

import Silk from '@/components/BackgroundWebP';
export default function Home() {
  return (
    <div className=" w-screen h-screen fixed top-0 left-0 z-[-1]">
      <Silk
        speed={3}
        scale={1}
        color="#7B588D"
        noiseIntensity={2.2}
        rotation={6.23}
      />
    </div>

  );
}
