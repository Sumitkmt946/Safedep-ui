import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DependencyList({ deps = [] }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dependencies</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {deps.map((d: any) => (
            <li key={d.name} className="border p-2 rounded">
              {d.name} — {d.version}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
