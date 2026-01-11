import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RiskCard({ score, level }: any) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Risk Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{score}</div>
        <div className="text-gray-600 capitalize">{level}</div>
      </CardContent>
    </Card>
  );
}
