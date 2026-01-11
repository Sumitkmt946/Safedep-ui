import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function VersionTable({ versions = [] }: any) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Version</TableHead>
          <TableHead>Published On</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {versions.map((v: any) => (
          <TableRow key={v.version}>
            <TableCell>{v.version}</TableCell>
            <TableCell>{v.published}</TableCell>

            <TableCell className="text-blue-600 cursor-pointer">
              View Version
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
