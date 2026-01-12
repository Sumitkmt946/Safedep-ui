import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function VersionTable({ versions = [], currentVersion }: any) {
  // Mock data if no versions provided
  const mockVersions = [
    { version: "0.24.0", published: "08/10/2024", isLatest: true },
    { version: "1.2.3", published: "08/13/2024", isLatest: false },
    { version: "5.0.0", published: "08/14/2024", isLatest: false },
    { version: "5.0.1", published: "08/15/2024", isLatest: false },
    { version: "5.0.2", published: "08/16/2024", isLatest: false },
  ];

  const displayVersions = versions.length > 0 ? versions : mockVersions;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Version</TableHead>
          <TableHead>Published On</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {displayVersions.map((v: any) => (
          <TableRow key={v.version}>
            <TableCell className="font-medium">
              <div className="flex items-center space-x-2">
                <span>{v.version}</span>
                {v.isLatest && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Latest
                  </Badge>
                )}
              </div>
            </TableCell>
            <TableCell>{v.published}</TableCell>
            <TableCell className="text-right">
              <Button variant="link" className="text-blue-600 hover:text-blue-800 p-0">
                View Version
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
