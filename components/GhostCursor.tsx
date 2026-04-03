"use client";

interface GhostCursorProps {
  children: React.ReactNode;
  className?: string;
}

const GhostCursor = ({ children, className }: GhostCursorProps) => {
  return (
    <div className={className}>{children}</div>
  );
};

export default GhostCursor;
