import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "csrf_token";
const TOKEN_LENGTH = 32;
const TOKEN_EXPIRY_SECONDS = 60 * 60; // 1 hour

export function generateCsrfToken(): string {
  return crypto.randomBytes(TOKEN_LENGTH).toString("hex");
}

export async function setCsrfCookie(token: string): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: TOKEN_EXPIRY_SECONDS,
  });
}

export async function getCsrfTokenFromCookie(): Promise<string | undefined> {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value;
}

export function validateCsrfToken(cookieToken: string | undefined, bodyToken: string): boolean {
  if (!cookieToken || !bodyToken) return false;
  if (cookieToken.length !== bodyToken.length) return false;
  return crypto.timingSafeEqual(Buffer.from(cookieToken), Buffer.from(bodyToken));
}
