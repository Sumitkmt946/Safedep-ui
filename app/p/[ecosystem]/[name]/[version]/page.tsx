import PackageHeader from "@/components/PackageHeader";
import RiskCard from "@/components/RiskCard";
import VulnerabilityList from "@/components/VulnerabilityList";
import DependencyList from "@/components/DependencyList";
import MetricsRow from "@/components/MetricsRow";
import PackageTabs from "@/components/PackageTabs";

import { getPackageData } from "@/lib/getPackageData";

interface PageProps {
  params: Promise<{
    ecosystem: string;
    name: string;
    version: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  // ❗ FIX: Unwrap params (because it's a Promise)
  const { ecosystem, name, version } = await params;

  const data = await getPackageData(ecosystem, name, version);

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-6">
      <PackageHeader data={data} />
      <RiskCard score={data?.risk?.score ?? 0} level={data?.risk?.level ?? "Unknown"} />
      <MetricsRow data={data} />
      <PackageTabs data={data} />
    </div>
  );
}
