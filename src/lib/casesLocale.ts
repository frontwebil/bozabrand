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
