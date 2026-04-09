import { cn } from "@/lib/utils";

export const AgLabsLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-indigo-500 rounded-lg" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 w-5 h-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-bold text-xl tracking-tight font-serif text-foreground">
        AG <span className="text-violet-600">LABS</span>
      </span>
    </div>
  );
};
