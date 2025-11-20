
import type { SVGProps } from "react";

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22c-2 0-3-1-3-3 0-1.5 1-3 3-3s3 1.5 3 3c0 2-1 3-3 3z" />
      <path d="M12 16V8" />
      <path d="M15 8c0-2.2-1.8-4-4-4" />
      <path d="M9 8c0-2.2 1.8-4 4-4" />
      <path d="M15 11c0 2.2-1.8 4-4 4s-4-1.8-4-4" />
    </svg>
  );
}
