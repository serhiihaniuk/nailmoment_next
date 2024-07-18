export const Badge = ({ className = "", size = 173, duration = 29 }) => (
  <div className={`w-[${size}px] h-[${size}px] ${className}`}>
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 273 273"
      width="100%"
      height="100%"
      style={{
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <style>{`.a{fill:#fc7eff}`}</style>
      <path
        className="a"
        d="m225.4 173.6c2.5 9.3-3 18.9-12.3 21.3-6.5 1.7-11.5 7-12.6 13.6-1.7 9.5-10.9 15.7-20.3 13.8-6.6-1.3-13.4 1.4-17.3 6.8-5.6 7.8-16.6 9.5-24.3 3.7-5.3-4.1-12.6-4.6-18.5-1.4-8.5 4.6-19 1.3-23.4-7.2-3.1-6-9.4-9.6-16.1-9.3-9.6 0.4-17.7-7.1-18-16.7-0.2-6.7-4.3-12.7-10.5-15.4-8.8-3.7-12.9-14-8.9-22.8 2.7-6.1 1.6-13.3-2.8-18.4-6.4-7.2-5.5-18.2 1.8-24.4 5.2-4.4 7.3-11.3 5.5-17.8-2.6-9.3 3-18.8 12.3-21.2 6.5-1.7 11.4-7 12.6-13.7 1.7-9.4 10.8-15.7 20.3-13.8 6.6 1.3 13.3-1.3 17.3-6.8 5.6-7.8 16.5-9.4 24.2-3.6 5.4 4 12.6 4.6 18.5 1.4 8.5-4.6 19.1-1.3 23.5 7.2 3.1 6 9.4 9.6 16.1 9.3 9.6-0.5 17.7 7.1 18 16.7 0.2 6.7 4.2 12.7 10.4 15.3 8.9 3.8 12.9 14.1 9 22.9-2.8 6.1-1.7 13.3 2.8 18.3 6.3 7.3 5.5 18.3-1.9 24.5-5.1 4.3-7.2 11.3-5.4 17.7z"
      />
    </svg>
  </div>
);

export const RotatingBadgeWithText = () => {
  return (
    <div className="relative w-[273px] h-[273px] flex flex-col items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <Badge className="w-full h-full" />
      </div>
      <div className="z-10 font-extrabold text-2xl">КОНФЕРЕНЦІЯ</div>
    </div>
  );
};
