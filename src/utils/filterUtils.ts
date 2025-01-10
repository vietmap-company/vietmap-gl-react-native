import { type FilterExpression } from "../types/VietmapStyles";

export function getFilter(filter: FilterExpression | undefined): string[] {
  if (!Array.isArray(filter) || filter.length === 0) {
    return [];
  }

  return filter;
}
