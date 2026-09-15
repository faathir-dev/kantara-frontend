const FALLBACK_API_URL = "https://kantara-backend-flax.vercel.app/api";

export function getApiBaseUrl(): string {
  const isDev = process.env.NEXT_PUBLIC_RUN_MODE === "development";
  const configured = isDev
    ? process.env.NEXT_PUBLIC_API_URL_DEV
    : process.env.NEXT_PUBLIC_API_URL_PROD;

  return (
    configured ||
    process.env.NEXT_PUBLIC_API_URL_PROD ||
    process.env.NEXT_PUBLIC_API_URL_DEV ||
    FALLBACK_API_URL
  );
}
