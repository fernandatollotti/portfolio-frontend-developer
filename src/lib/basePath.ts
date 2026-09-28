/**
 * GitHub Pages project sites are served from https://user.github.io/repo-name/,
 * not the domain root — set NEXT_PUBLIC_BASE_PATH=/repo-name at build time (the
 * deploy workflow does this) so both Next's router and hand-written asset paths
 * (plain <img src="..."> — anything not going through next/image or next/link,
 * which resolve basePath automatically) resolve correctly. Empty locally.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
