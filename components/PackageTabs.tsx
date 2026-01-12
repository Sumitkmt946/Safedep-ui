import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import VulnerabilityTable from "@/components/VulnerabilityTable";
import VersionTable from "@/components/VersionTable";
import LicenseTable from "@/components/LicenseTable";



export default function PackageTabs({ data }: any) {
  return (
    <Tabs defaultValue="versions" className="w-full mt-6">

      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="vulns">Vulnerabilities</TabsTrigger>
        <TabsTrigger value="versions">Versions</TabsTrigger>
        <TabsTrigger value="license">License</TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <p className="mt-4 text-gray-700">{data.summary || "No summary"}</p>
      </TabsContent>

      <TabsContent value="vulns">
        <VulnerabilityTable vulns={data.vulnerabilities} />
      </TabsContent>

      <TabsContent value="versions">
        <VersionTable versions={data.versions} />
      </TabsContent>

      <TabsContent value="license">
        <LicenseTable license={data.license} />
      </TabsContent>

    </Tabs>
  );
}
