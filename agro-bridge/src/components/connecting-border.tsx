
import type { SVGProps } from "react";

export function ConnectingBorder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200,8 C295,8 385,90 385,200 C385,310 295,392 200,392 C105,392 15,310 15,200 C15,90 105,8 200,8 
              M200,25 C280,25 360,95 365,200 C368,305 295,375 200,375 C105,375 32,305 35,200 C38,95 120,25 200,25"
            stroke="#006400" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M198,12 Q265,2 328,42 Q380,95 382,200 Q379,308 315,368 Q248,398 192,386 Q100,395 72,305 Q25,215 38,138 Q68,58 198,12"
            stroke="#006400" stroke-width="20" stroke-linecap="round" opacity="0.7"/>
      <path d="M202,15 Q258,5 315,38 Q370,85 372,200 Q369,315 308,370 Q245,395 198,382" 
            stroke="#006400" stroke-width="16" stroke-linecap="round" opacity="0.5"/>
    </svg>
  );
}