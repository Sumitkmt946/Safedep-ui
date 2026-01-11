import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function LicenseTable({ license }: any) {
  if (!license) return <p>No license info found.</p>;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>License ID</TableHead>
          <TableHead>License Name</TableHead>
          <TableHead>Reference URL</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>{license.id}</TableCell>
          <TableCell>{license.name}</TableCell>
          <TableCell className="text-blue-600">
            <a href={license.url} target="_blank">
              {license.url}
            </a>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
