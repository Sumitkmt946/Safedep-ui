import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PackageHeader({ data }: any) {
  return (
    <div className="space-y-4">
      {/* Header with SafeDep branding */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>POWERED BY</span>
            <span className="font-semibold text-blue-600">SafeDep</span>
          </div>
        </div>
        <Button>Install GitHub App</Button>
      </div>

      {/* Package Information Card */}
      <Card>
        <CardContent className="py-6">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">
                {data?.package?.name ?? "Unknown"}@{data?.package?.version ?? "0.0.0"}
              </h2>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Analyzed on:</strong> 24 Oct 2025, 10:06</p>
                <p><strong>Source:</strong> https://registry.npmjs.org/{data?.package?.name ?? "unknown"}/-/{data?.package?.name ?? "unknown"}-{data?.package?.version ?? "0.0.0"}.tgz</p>
                <p><strong>SHA256:</strong> {data?.package?.sha256 ?? "N/A"}</p>
                <p><strong>Confidence:</strong> High</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
