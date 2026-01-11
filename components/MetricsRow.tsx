import Metric from "@/components/ui/metric";

export default function MetricsRow({ data }: any) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <Metric 
        label="Version" 
        value={data?.package?.version ?? "N/A"} 
      />

      <Metric 
        label="Vulnerabilities" 
        value={data?.vulnerabilities?.length ?? 0} 
      />

      <Metric
        label="OpenSSF Scorecard"
        value={data?.scorecard?.score ?? "N/A"} // FIX
      />

      <Metric 
        label="License" 
        value={data?.license?.id ?? "N/A"} 
      />

      <Metric 
        label="Ecosystem" 
        value={data?.package?.ecosystem ?? "N/A"} 
      />
    </div>
  );
}
