import { Card, CardContent } from "@/components/ui/card";

export default function PackageHeader({ data }: any) {
  return (
    <Card>
      <CardContent className="py-6">
        <h1 className="text-2xl font-bold">
          {data?.package?.name ?? "Unknown"}
          @
          {data?.package?.version ?? "0.0.0"}
        </h1>

        <p className="text-gray-500 text-sm">
          {data?.summary ?? "No summary available"}
        </p>
      </CardContent>
    </Card>
  );
}
