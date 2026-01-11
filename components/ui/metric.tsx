interface MetricProps {
  label: string;
  value: any;
}

export default function Metric({ label, value }: MetricProps) {
  return (
    <div className="p-4 rounded border bg-white shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}
