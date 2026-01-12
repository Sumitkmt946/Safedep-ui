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
    <div className="max-w-6xl mx-auto py-8 space-y-6">
      <PackageHeader data={data} />
      
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-5 gap-4">
        <div className="p-6 rounded-lg border bg-white shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Version</p>
          <p className="text-2xl font-bold text-gray-900">{data?.package?.version || "N/A"}</p>
        </div>
        
        <div className="p-6 rounded-lg border bg-white shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Vulnerabilities</p>
          <p className="text-2xl font-bold text-red-600">{data?.vulnerabilities?.length || 0}</p>
        </div>
        
        <div className="p-6 rounded-lg border bg-white shadow-sm">
          <p className="text-sm text-gray-600 mb-2">OpenSSF Scorecard</p>
          <p className="text-2xl font-bold text-green-600">{data?.metrics?.scorecard?.score || "N/A"}</p>
        </div>
        
        <div className="p-6 rounded-lg border bg-white shadow-sm">
          <p className="text-sm text-gray-600 mb-2">License</p>
          <p className="text-2xl font-bold text-gray-900">{data?.license?.id || "N/A"}</p>
        </div>
        
        <div className="p-6 rounded-lg border bg-white shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Ecosystem</p>
          <p className="text-2xl font-bold text-gray-900">{data?.package?.ecosystem || ecosystem}</p>
        </div>
      </div>

      <PackageTabs data={data} />
    </div>
  );
}
