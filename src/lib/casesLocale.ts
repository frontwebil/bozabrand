export type PublicCase = {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  categories: string[];
  imgUrl: string;
  order: number;
};

export type PublicCaseBlock = {
  id: number;
  type: string;
  order: number;
  data: unknown;
};

export type PublicCaseDetail = PublicCase & {
  blocks: PublicCaseBlock[];
};

export type SiteLanguage = "uk" | "en";

export function pickCasesList(
  language: SiteLanguage,
  ukCases: PublicCase[],
  enCases: PublicCase[],
): PublicCase[] {
  if (language === "uk") {
    return ukCases;
  }

  const enBySlug = new Map(enCases.map((item) => [item.slug, item]));

  return ukCases.map((item) => enBySlug.get(item.slug) ?? item);
}

/**
 * Top projects: only from the first 3 published cases by `order`.
 * - Current is #1 → show #2 and #3
 * - Current is #2 → show #1 and #3
 * - Current is #3 → show #1 and #2
 * - Current is outside top 3 (4th+) → always show #1 and #2
 */
export function pickTopCasesAroundCurrent(
  cases: PublicCase[],
  currentSlug: string,
  limit = 2,
): PublicCase[] {
  const topThree = cases.slice(0, 3);
  const currentInTopThree = topThree.some((c) => c.slug === currentSlug);

  if (!currentInTopThree) {
    return topThree.slice(0, limit);
  }

  return topThree.filter((c) => c.slug !== currentSlug).slice(0, limit);
}

export function pickCaseDetail(
  language: SiteLanguage,
  ukCase: PublicCaseDetail | null,
  enCase: PublicCaseDetail | null,
): PublicCaseDetail | null {
  if (language === "en") {
    return enCase ?? ukCase;
  }

  return ukCase ?? enCase;
}
