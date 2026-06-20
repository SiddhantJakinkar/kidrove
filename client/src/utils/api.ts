const DEFAULT_PRODUCTION_API = 'https://kidrove-api-96wj.onrender.com'

const API_BASE_URL = (
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? DEFAULT_PRODUCTION_API : '')
).replace(/\/$/, '')

export function getApiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') ?? ''

  if (!contentType.includes('application/json')) {
    const text = await response.text()

    if (text.includes('NOT_FOUND') || text.includes('The page could not be found')) {
      throw new Error(
        'API endpoint not found. Please hard-refresh the page (Ctrl+Shift+R) and try again.',
      )
    }

    throw new Error(
      text.startsWith('<')
        ? 'Could not reach the API server. Please try again in a few seconds.'
        : text || 'Server returned an invalid response.',
    )
  }

  return response.json() as Promise<T>
}
