// Project Constants

export const TABLE_PREFIX = 'ecospray_'

export function env(key: string, fallback = ''): string {
  return process.env[key] ?? fallback
}

export function requiredEnv(key: string): string {
  const val = process.env[key]
  if (!val) throw new Error(`Missing required env var: ${key}`)
  return val
}

export const SITE_CONFIG = {
  name: env('NEXT_PUBLIC_SITE_NAME', 'Spray Foam Solutions'),
  phone: env('NEXT_PUBLIC_SITE_PHONE', ''),
  email: env('NEXT_PUBLIC_SITE_EMAIL', ''),
  domain: '',
  location: '',
}
