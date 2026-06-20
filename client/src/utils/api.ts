const API_BASE_URL = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

export function getApiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${API_BASE_URL}${normalizedPath}`
}

export async function parseJsonResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('content-type') ?? ''

  if (!contentType.includes('application/json')) {
    const text = await response.text()
    throw new Error(
      text.startsWith('<')
        ? 'Could not reach the API server. Set VITE_API_URL to your deployed backend URL and redeploy the frontend.'
        : text || 'Server returned an invalid response.',
    )
  }

  return response.json() as Promise<T>
}
