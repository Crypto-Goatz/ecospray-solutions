// EcoSpray Solutions — Project Constants

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
  name: env('NEXT_PUBLIC_SITE_NAME', 'EcoSpray Solutions'),
  phone: env('NEXT_PUBLIC_SITE_PHONE', '(412) 555-1234'),
  email: env('NEXT_PUBLIC_SITE_EMAIL', 'info@ecospraysolutions.com'),
  domain: 'ecospraysolutions.com',
  location: 'Murrysville, PA',
}
