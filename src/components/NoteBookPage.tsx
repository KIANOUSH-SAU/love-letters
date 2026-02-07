import { ReactNode } from "react";

interface NotebookPageProps {
  children?: ReactNode;
  showLines?: boolean;
  className?: string;
}

const NotebookPage = ({
  children,
  showLines = true,
  className = "",
}: NotebookPageProps) => {
  return (
    <div
      className={`relative bg-[#fffef9] shadow-lg overflow-hidden ${className}`}
      style={{
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
      }}
    >
      {/* Lined paper background */}
      {showLines && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(transparent, transparent 30px, rgba(203, 0, 111, 0.08) 3px, rgba(203, 0, 111, 0.08) 32px)",
            backgroundPosition: "0 120px",
          }}
        />
      )}

      {/* Content area */}
      <div className="relative pl-5 pr-5 py-5 min-h-[500px] min-w-[350px]">
        {children}
      </div>

      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default NotebookPage;
