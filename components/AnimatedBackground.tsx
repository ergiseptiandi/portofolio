const AnimatedBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--border)_45%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_45%,transparent)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.35] dark:opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-background via-background/85 to-transparent" />
      <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-primary/12 blur-3xl dark:bg-primary/18" />
      <div className="absolute right-[-6rem] top-28 h-80 w-80 rounded-full bg-accent/14 blur-3xl dark:bg-accent/12" />
      <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl dark:bg-primary/14" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_0,_transparent_45%,_rgba(15,23,42,0.06)_100%)] dark:bg-[radial-gradient(circle_at_top,_transparent_0,_transparent_28%,_rgba(0,0,0,0.44)_100%)]" />
    </div>
  );
};

export default AnimatedBackground;
