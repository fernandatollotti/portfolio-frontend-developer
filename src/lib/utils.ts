export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function projectDomId(id: string): string {
  return `project-${id}`;
}
