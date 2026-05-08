const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* Glow blob — top left */}
      <div
        className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)" }}
      />
      {/* Glow blob — bottom right */}
      <div
        className="absolute -bottom-60 -right-40 h-[600px] w-[600px] rounded-full blur-[180px]"
        style={{ background: "radial-gradient(circle, rgba(170,255,0,0.04) 0%, transparent 70%)" }}
      />
      {/* Glow blob — center */}
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
        style={{ background: "radial-gradient(circle, rgba(0,245,255,0.03) 0%, transparent 70%)" }}
      />
    </div>
  );
};

export default AnimatedBackground;
