"use client";

import {
  caseBlocksRegistry,
  CaseBlockType,
} from "@/Components/CasesTemplates/registry";
import { TopProjects } from "@/Components/CasesTemplates/TopProjects/TopProjects";
import {
  PublicCase,
  PublicCaseDetail,
  pickCaseDetail,
  pickCasesList,
} from "@/lib/casesLocale";
import { useLanguage } from "@/lib/useLanguague";
import { useMemo } from "react";

export function CaseDetailContent({
  ukCase,
  enCase,
  ukTopCases,
  enTopCases,
}: {
  ukCase: PublicCaseDetail | null;
  enCase: PublicCaseDetail | null;
  ukTopCases: PublicCase[];
  enTopCases: PublicCase[];
}) {
  const { language } = useLanguage();

  const caseItem = useMemo(
    () => pickCaseDetail(language, ukCase, enCase),
    [language, ukCase, enCase],
  );

  const topCases = useMemo(() => {
    const list = pickCasesList(language, ukTopCases, enTopCases);
    return list.slice(0, 2);
  }, [language, ukTopCases, enTopCases]);

  if (!caseItem) {
    return null;
  }

  return (
    <>
      {caseItem.blocks.map((block) => {
        const registryItem = caseBlocksRegistry[block.type as CaseBlockType];
        if (!registryItem) {
          return null;
        }

        const BlockComponent = registryItem.component;
        return <BlockComponent key={block.id} data={block.data as never} />;
      })}
      {topCases.length >= 2 && <TopProjects topCases={topCases} />}
    </>
  );
}
