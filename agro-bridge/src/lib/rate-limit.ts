
// lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Option 1: Upstash Redis (recommended – uncomment when you have keys)
const redis = process.env.UPSTASH_REDIS_REST_URL
  ? Redis.fromEnv()
  : null;

export const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"), // 5 requests per 10 minutes
      prefix: "Debridger:ratelimit",
    })
  : null;

// Option 2: Simple in-memory fallback (always works, even without Redis)
const rateLimitMap = new Map<string, number[]>();

export function simpleRateLimit(
  ip: string,
  limit = 5,
  windowMs = 10 * 60 * 1000 // 10 minutes
): boolean {
  const now = Date.now();
  const attempts = rateLimitMap.get(ip) || [];

  // Keep only attempts within the window
  const validAttempts = attempts.filter((time) => now - time < windowMs);

  if (validAttempts.length >= limit) {
    return false; // Blocked
  }

  validAttempts.push(now);
  rateLimitMap.set(ip, validAttempts);
  return true;
}