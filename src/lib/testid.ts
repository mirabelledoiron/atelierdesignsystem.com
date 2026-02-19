export function testId(id: string) {
  return { "data-testid": id } as const;
}
