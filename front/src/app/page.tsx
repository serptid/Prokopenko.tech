"use client";
import Silk from '@/components/Silk';
import ProfileCard from '@/components/ProfileCard';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Фон Silk */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={3}
          scale={1}
          color="#7B588D"
          noiseIntensity={2.2}
          rotation={6.23}
        />
      </div>

      {/* Центрированный контент */}
      <div className="flex items-center justify-center w-1/2 h-full">
        <ProfileCard
          name="Прокопенко Сергей Игоревич"
          title="Developer"
          handle="ProkopenkoSR"
          status="Online"
          contactText="Напиши мне"
          avatarUrl="png/avatar.png"
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      </div>
    </div>
  );
}
