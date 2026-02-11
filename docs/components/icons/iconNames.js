const eikonsBaseUrl = 'https://assets.finn.no/pkg/eikons/v1';

export async function fetchIconNames() {
  const response = await fetch(eikonsBaseUrl);
  const data = await response.json();

  return data?.files
    .map((file) => file?.pathname)
    .filter((path) => path?.startsWith('/en/') && path?.endsWith('.svg'))
    .map((path) => path?.replace('/en/', '')?.replace('.svg', ''))
    .sort();
}
