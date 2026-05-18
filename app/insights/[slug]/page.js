import Image from "next/image";
import { notFound } from "next/navigation";
import Footer from "../../Cx/Footer";
import InsightArticleAbaAiTurningPointContent from "../../Cx/InsightArticleAbaAiTurningPointContent";
import InsightArticleAcedsAustinContent from "../../Cx/InsightArticleAcedsAustinContent";
import InsightArticleAiLitigationCleContent from "../../Cx/InsightArticleAiLitigationCleContent";
import InsightArticleAtlantaMastersMomentumContent from "../../Cx/InsightArticleAtlantaMastersMomentumContent";
import InsightArticleBeforeReviewBeginsContent from "../../Cx/InsightArticleBeforeReviewBeginsContent";
import InsightArticleCloudEdiscoveryContent from "../../Cx/InsightArticleCloudEdiscoveryContent";
import InsightArticleBeyondBenchAiContent from "../../Cx/InsightArticleBeyondBenchAiContent";
import InsightArticleBeyondBuzzAiContent from "../../Cx/InsightArticleBeyondBuzzAiContent";
import InsightArticleBolder2026Content from "../../Cx/InsightArticleBolder2026Content";
import InsightArticleCalActiveLearningContent from "../../Cx/InsightArticleCalActiveLearningContent";
import InsightArticleCovidOngoingContent from "../../Cx/InsightArticleCovidOngoingContent";
import InsightArticleDataGovernanceDenverContent from "../../Cx/InsightArticleDataGovernanceDenverContent";
import InsightArticleDataOverloadContent from "../../Cx/InsightArticleDataOverloadContent";
import InsightArticleDataTreeHolidayContent from "../../Cx/InsightArticleDataTreeHolidayContent";
import InsightArticleEdiscoveryInActionContent from "../../Cx/InsightArticleEdiscoveryInActionContent";
import InsightArticleEarlyCaseIntelligenceContent from "../../Cx/InsightArticleEarlyCaseIntelligenceContent";
import InsightArticleEdiscoveryMadeSimpleContent from "../../Cx/InsightArticleEdiscoveryMadeSimpleContent";
import InsightArticleEdiscoveryAiPartnershipContent from "../../Cx/InsightArticleEdiscoveryAiPartnershipContent";
import InsightArticleEdrmFrameworkContent from "../../Cx/InsightArticleEdrmFrameworkContent";
import InsightArticleEverlawPartnershipEnhancedContent from "../../Cx/InsightArticleEverlawPartnershipEnhancedContent";
import InsightArticleEverlawSummit25Content from "../../Cx/InsightArticleEverlawSummit25Content";
import InsightArticleEsiGenaiContent from "../../Cx/InsightArticleEsiGenaiContent";
import InsightArticleForensicsCsiContent from "../../Cx/InsightArticleForensicsCsiContent";
import InsightArticleFtcNoncompeteContent from "../../Cx/InsightArticleFtcNoncompeteContent";
import InsightArticleGenaiEthicsContent from "../../Cx/InsightArticleGenaiEthicsContent";
import InsightArticleGenaiHypeHandsContent from "../../Cx/InsightArticleGenaiHypeHandsContent";
import InsightArticleLegalGeekChicagoContent from "../../Cx/InsightArticleLegalGeekChicagoContent";
import InsightArticleLegalHoldsPreservationContent from "../../Cx/InsightArticleLegalHoldsPreservationContent";
import InsightArticleLegalweek126kContent from "../../Cx/InsightArticleLegalweek126kContent";
import InsightArticleMarlaMohrContent from "../../Cx/InsightArticleMarlaMohrContent";
import InsightArticleIso27001Content from "../../Cx/InsightArticleIso27001Content";
import InsightArticleLegalOpsTrailblazersContent from "../../Cx/InsightArticleLegalOpsTrailblazersContent";
import InsightArticleLifePreserversContent from "../../Cx/InsightArticleLifePreserversContent";
import InsightArticleMasteringEdiscoveryPmContent from "../../Cx/InsightArticleMasteringEdiscoveryPmContent";
import InsightArticleMastersAtlantaRecapContent from "../../Cx/InsightArticleMastersAtlantaRecapContent";
import InsightArticleMastersDcDevicesContent from "../../Cx/InsightArticleMastersDcDevicesContent";
import InsightArticleMastersDallasDynastyContent from "../../Cx/InsightArticleMastersDallasDynastyContent";
import InsightArticleMastersDenverRoomContent from "../../Cx/InsightArticleMastersDenverRoomContent";
import InsightArticleMastersLaFutureContent from "../../Cx/InsightArticleMastersLaFutureContent";
import InsightArticleMastersNavigateWaveContent from "../../Cx/InsightArticleMastersNavigateWaveContent";
import InsightArticleMastersNycJuly24Content from "../../Cx/InsightArticleMastersNycJuly24Content";
import InsightArticleMastersNycContent from "../../Cx/InsightArticleMastersNycContent";
import InsightArticleMastersPhillyContent from "../../Cx/InsightArticleMastersPhillyContent";
import InsightArticleMastersSeattleContent from "../../Cx/InsightArticleMastersSeattleContent";
import InsightArticleMastersPowerSkillsLaunchContent from "../../Cx/InsightArticleMastersPowerSkillsLaunchContent";
import InsightArticleMillionRecordContent from "../../Cx/InsightArticleMillionRecordContent";
import InsightArticleMobileBeastContent from "../../Cx/InsightArticleMobileBeastContent";
import InsightArticleModernCommunicationsDiscoveryContent from "../../Cx/InsightArticleModernCommunicationsDiscoveryContent";
import InsightArticleOffshoreUpgradeContent from "../../Cx/InsightArticleOffshoreUpgradeContent";
import InsightArticlePaperChasePixelContent from "../../Cx/InsightArticlePaperChasePixelContent";
import InsightArticlePrivilegeCleDcContent from "../../Cx/InsightArticlePrivilegeCleDcContent";
import InsightArticleRichRobinsonInterviewContent from "../../Cx/InsightArticleRichRobinsonInterviewContent";
import InsightArticleSocialMediaSocmintContent from "../../Cx/InsightArticleSocialMediaSocmintContent";
import InsightArticleSustainabilityLegalTechContent from "../../Cx/InsightArticleSustainabilityLegalTechContent";
import InsightArticleTarTrilogyContent from "../../Cx/InsightArticleTarTrilogyContent";
import InsightArticleTexasShowdownContent from "../../Cx/InsightArticleTexasShowdownContent";
import InsightArticleUnderAttackCyberContent from "../../Cx/InsightArticleUnderAttackCyberContent";
import InsightArticleWestCoastRoadshowContent from "../../Cx/InsightArticleWestCoastRoadshowContent";
import {
  DETAIL_SLUG_ABA_AI_TURNING_POINT,
  DETAIL_SLUG_ACEDS_AUSTIN,
  DETAIL_SLUG_AI_LITIGATION_CLE,
  DETAIL_SLUG_ATLANTA_MASTERS_MOMENTUM,
  DETAIL_SLUG_BEFORE_REVIEW_BEGINS,
  DETAIL_SLUG_BEYOND_BENCH_AI,
  DETAIL_SLUG_BEYOND_BUZZ_AI,
  DETAIL_SLUG_BOLDER_2026,
  DETAIL_SLUG_CAL_ACTIVE_LEARNING,
  DETAIL_SLUG_CLOUD_EDISCOVERY,
  DETAIL_SLUG_COVID_ONGOING,
  DETAIL_SLUG_DATA_GOVERNANCE_DENVER,
  DETAIL_SLUG_DATA_OVERLOAD,
  DETAIL_SLUG_DATA_TREE_HOLIDAY,
  DETAIL_SLUG_EARLY_CASE_INTELLIGENCE,
  DETAIL_SLUG_EDISCOVERY_AI_PARTNERSHIP,
  DETAIL_SLUG_EDISCOVERY_IN_ACTION,
  DETAIL_SLUG_EDISCOVERY_SIMPLE,
  DETAIL_SLUG_EDRM_FRAMEWORK,
  DETAIL_SLUG_ESI_GENAI,
  DETAIL_SLUG_EVERLAW_PARTNERSHIP_ENHANCED,
  DETAIL_SLUG_EVERLAW_SUMMIT_25,
  DETAIL_SLUG_FORENSICS_CSI,
  DETAIL_SLUG_FTC_NONCOMPETE,
  DETAIL_SLUG_GENAI_ETHICS,
  DETAIL_SLUG_GENAI_HYPE_HANDS,
  DETAIL_SLUG_ISO_27001,
  DETAIL_SLUG_LEGAL_GEEK_CHICAGO,
  DETAIL_SLUG_LEGAL_HOLDS_PRESERVATION,
  DETAIL_SLUG_LEGAL_OPS_TRAILBLAZERS,
  DETAIL_SLUG_LEGALWEEK_126K,
  DETAIL_SLUG_LIFE_PRESERVERS,
  DETAIL_SLUG_MARLA_MOHR_HIRE,
  DETAIL_SLUG_MASTERS_ATLANTA_RECAP,
  DETAIL_SLUG_MASTERS_DALLAS_DYNASTY,
  DETAIL_SLUG_MASTERS_DC_DEVICES,
  DETAIL_SLUG_MASTERS_DENVER_ROOM,
  DETAIL_SLUG_MASTERS_LA_FUTURE,
  DETAIL_SLUG_MASTERS_NAVIGATE_NEXT_WAVE,
  DETAIL_SLUG_MASTERS_NYC_JULY24,
  DETAIL_SLUG_MASTERS_NYC,
  DETAIL_SLUG_MASTERS_PHILLY,
  DETAIL_SLUG_MASTERS_POWER_SKILLS_LAUNCH,
  DETAIL_SLUG_MASTERS_SEATTLE,
  DETAIL_SLUG_MASTERING_EDISCOVERY_PM,
  DETAIL_SLUG_MILLION_RECORD,
  DETAIL_SLUG_MOBILE_BEAST,
  DETAIL_SLUG_MODERN_COMMUNICATIONS_STORY,
  DETAIL_SLUG_OFFSHORE_UPGRADE,
  DETAIL_SLUG_PAPER_CHASE_PIXEL,
  DETAIL_SLUG_PRIVILEGE_CLE_DC,
  DETAIL_SLUG_RICH_ROBINSON_INTERVIEW,
  DETAIL_SLUG_SOCIAL_MEDIA_DISCOVERY,
  DETAIL_SLUG_SUSTAINABILITY_LEGAL_TECH,
  DETAIL_SLUG_TAR_TRILOGY,
  DETAIL_SLUG_TEXAS_SHOWDOWN,
  DETAIL_SLUG_UNDER_ATTACK_CYBER,
  DETAIL_SLUG_WEST_COAST_ROADSHOW,
  getInsightBySlug,
  insightArticles,
  INSIGHT_BRAND_BLUE,
} from "../../Cx/insightArticlesData";
import Nav from "../../Cx/Nav";

const ARTICLE_BODY_BY_SLUG = {
  [DETAIL_SLUG_ESI_GENAI]: InsightArticleEsiGenaiContent,
  [DETAIL_SLUG_DATA_OVERLOAD]: InsightArticleDataOverloadContent,
  [DETAIL_SLUG_MILLION_RECORD]: InsightArticleMillionRecordContent,
  [DETAIL_SLUG_GENAI_ETHICS]: InsightArticleGenaiEthicsContent,
  [DETAIL_SLUG_BOLDER_2026]: InsightArticleBolder2026Content,
  [DETAIL_SLUG_WEST_COAST_ROADSHOW]: InsightArticleWestCoastRoadshowContent,
  [DETAIL_SLUG_ABA_AI_TURNING_POINT]: InsightArticleAbaAiTurningPointContent,
  [DETAIL_SLUG_DATA_TREE_HOLIDAY]: InsightArticleDataTreeHolidayContent,
  [DETAIL_SLUG_LIFE_PRESERVERS]: InsightArticleLifePreserversContent,
  [DETAIL_SLUG_EDISCOVERY_SIMPLE]: InsightArticleEdiscoveryMadeSimpleContent,
  [DETAIL_SLUG_MASTERS_ATLANTA_RECAP]: InsightArticleMastersAtlantaRecapContent,
  [DETAIL_SLUG_BEFORE_REVIEW_BEGINS]: InsightArticleBeforeReviewBeginsContent,
  [DETAIL_SLUG_ATLANTA_MASTERS_MOMENTUM]: InsightArticleAtlantaMastersMomentumContent,
  [DETAIL_SLUG_EVERLAW_SUMMIT_25]: InsightArticleEverlawSummit25Content,
  [DETAIL_SLUG_MASTERS_SEATTLE]: InsightArticleMastersSeattleContent,
  [DETAIL_SLUG_MASTERS_PHILLY]: InsightArticleMastersPhillyContent,
  [DETAIL_SLUG_EARLY_CASE_INTELLIGENCE]: InsightArticleEarlyCaseIntelligenceContent,
  [DETAIL_SLUG_TEXAS_SHOWDOWN]: InsightArticleTexasShowdownContent,
  [DETAIL_SLUG_MOBILE_BEAST]: InsightArticleMobileBeastContent,
  [DETAIL_SLUG_LEGAL_OPS_TRAILBLAZERS]: InsightArticleLegalOpsTrailblazersContent,
  [DETAIL_SLUG_OFFSHORE_UPGRADE]: InsightArticleOffshoreUpgradeContent,
  [DETAIL_SLUG_GENAI_HYPE_HANDS]: InsightArticleGenaiHypeHandsContent,
  [DETAIL_SLUG_SOCIAL_MEDIA_DISCOVERY]: InsightArticleSocialMediaSocmintContent,
  [DETAIL_SLUG_TAR_TRILOGY]: InsightArticleTarTrilogyContent,
  [DETAIL_SLUG_ISO_27001]: InsightArticleIso27001Content,
  [DETAIL_SLUG_MASTERS_NYC]: InsightArticleMastersNycContent,
  [DETAIL_SLUG_BEYOND_BUZZ_AI]: InsightArticleBeyondBuzzAiContent,
  [DETAIL_SLUG_UNDER_ATTACK_CYBER]: InsightArticleUnderAttackCyberContent,
  [DETAIL_SLUG_BEYOND_BENCH_AI]: InsightArticleBeyondBenchAiContent,
  [DETAIL_SLUG_DATA_GOVERNANCE_DENVER]: InsightArticleDataGovernanceDenverContent,
  [DETAIL_SLUG_LEGAL_HOLDS_PRESERVATION]: InsightArticleLegalHoldsPreservationContent,
  [DETAIL_SLUG_CLOUD_EDISCOVERY]: InsightArticleCloudEdiscoveryContent,
  [DETAIL_SLUG_EDISCOVERY_IN_ACTION]: InsightArticleEdiscoveryInActionContent,
  [DETAIL_SLUG_MASTERS_DENVER_ROOM]: InsightArticleMastersDenverRoomContent,
  [DETAIL_SLUG_LEGAL_GEEK_CHICAGO]: InsightArticleLegalGeekChicagoContent,
  [DETAIL_SLUG_SUSTAINABILITY_LEGAL_TECH]: InsightArticleSustainabilityLegalTechContent,
  [DETAIL_SLUG_PRIVILEGE_CLE_DC]: InsightArticlePrivilegeCleDcContent,
  [DETAIL_SLUG_AI_LITIGATION_CLE]: InsightArticleAiLitigationCleContent,
  [DETAIL_SLUG_LEGALWEEK_126K]: InsightArticleLegalweek126kContent,
  [DETAIL_SLUG_EDISCOVERY_AI_PARTNERSHIP]: InsightArticleEdiscoveryAiPartnershipContent,
  [DETAIL_SLUG_MASTERS_DALLAS_DYNASTY]: InsightArticleMastersDallasDynastyContent,
  [DETAIL_SLUG_MODERN_COMMUNICATIONS_STORY]:
    InsightArticleModernCommunicationsDiscoveryContent,
  [DETAIL_SLUG_MASTERS_LA_FUTURE]: InsightArticleMastersLaFutureContent,
  [DETAIL_SLUG_MARLA_MOHR_HIRE]: InsightArticleMarlaMohrContent,
  [DETAIL_SLUG_CAL_ACTIVE_LEARNING]: InsightArticleCalActiveLearningContent,
  [DETAIL_SLUG_ACEDS_AUSTIN]: InsightArticleAcedsAustinContent,
  [DETAIL_SLUG_MASTERS_NAVIGATE_NEXT_WAVE]: InsightArticleMastersNavigateWaveContent,
  [DETAIL_SLUG_FORENSICS_CSI]: InsightArticleForensicsCsiContent,
  [DETAIL_SLUG_EVERLAW_PARTNERSHIP_ENHANCED]: InsightArticleEverlawPartnershipEnhancedContent,
  [DETAIL_SLUG_RICH_ROBINSON_INTERVIEW]: InsightArticleRichRobinsonInterviewContent,
  [DETAIL_SLUG_PAPER_CHASE_PIXEL]: InsightArticlePaperChasePixelContent,
  [DETAIL_SLUG_MASTERS_POWER_SKILLS_LAUNCH]:
    InsightArticleMastersPowerSkillsLaunchContent,
  [DETAIL_SLUG_MASTERS_NYC_JULY24]: InsightArticleMastersNycJuly24Content,
  [DETAIL_SLUG_EDRM_FRAMEWORK]: InsightArticleEdrmFrameworkContent,
  [DETAIL_SLUG_MASTERING_EDISCOVERY_PM]: InsightArticleMasteringEdiscoveryPmContent,
  [DETAIL_SLUG_FTC_NONCOMPETE]: InsightArticleFtcNoncompeteContent,
  [DETAIL_SLUG_COVID_ONGOING]: InsightArticleCovidOngoingContent,
  [DETAIL_SLUG_MASTERS_DC_DEVICES]: InsightArticleMastersDcDevicesContent,
};

export function generateStaticParams() {
  return insightArticles
    .filter((a) => a.hasArticlePage && ARTICLE_BODY_BY_SLUG[a.slug])
    .map((a) => ({ slug: a.slug }));
}

export default async function InsightArticlePage({ params }) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article?.hasArticlePage) {
    notFound();
  }

  const ArticleBody = ARTICLE_BODY_BY_SLUG[slug];

  if (!ArticleBody) {
    notFound();
  }

  const isRemote = article.image.startsWith("http");

  return (
    <main className="relative min-h-screen bg-black">
      <Nav />
      <div className="relative w-full min-h-[240px] sm:min-h-[300px] md:min-h-[360px] lg:min-h-[420px]">
        <Image
          src={article.image}
          alt={article.alt}
          fill
          priority
          unoptimized={isRemote}
          sizes="100vw"
          className={`object-cover ${article.imageClassName ?? ""}`}
        />
      </div>
      <header
        className="px-4 py-8 sm:px-6 sm:py-10 md:py-12"
        style={{ backgroundColor: INSIGHT_BRAND_BLUE }}
      >
        <h1 className="mx-auto max-w-4xl text-center text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-tight">
          {article.title}
        </h1>
      </header>
      <div className="bg-black text-white">
        <ArticleBody />
      </div>
      <Footer />
    </main>
  );
}
