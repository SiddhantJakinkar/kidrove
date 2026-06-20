const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

export function getApiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  if (!API_BASE_URL) {
    if (import.meta.env.PROD) {
      throw new Error('VITE_API_URL is not configured for production.')
    }
    return normalizedPath
  }

  return `${API_BASE_URL}${normalizedPath}`
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') ?? ''

  if (!contentType.includes('application/json')) {
    const text = await response.text()

    if (text.includes('NOT_FOUND') || text.includes('The page could not be found')) {
      throw new Error(
        'API endpoint not found. Check VITE_API_URL on your frontend host and redeploy.',
      )
    }

    throw new Error(
      text.startsWith('<')
        ? 'Could not reach the API server. Please try again shortly.'
        : 'Server returned an invalid response.',
    )
  }

  return response.json() as Promise<T>
}
