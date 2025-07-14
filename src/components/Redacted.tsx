type RedactedProps = {
  children: React.ReactNode;
  index?: number;
};

export default function Redacted({ children, index = 0 }: RedactedProps) {
  const rotationClass =
    index === 1
      ? "rotate-[1deg]"
      : index === 2
        ? "-rotate-[1deg]"
        : index === 5
          ? "rotate-[2deg]"
          : "rotate-[5deg]";

  return (
    <span className="relative inline-block whitespace-pre select-none group">
      <span
        className={`absolute top-[0.01em] left-0 w-[101%] h-[1.3em] skew-y-[-5deg] ${rotationClass} bg-dark rounded-sm shadow-md pointer-events-none transition-opacity duration-150 ease-out group-hover:opacity-0`}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
