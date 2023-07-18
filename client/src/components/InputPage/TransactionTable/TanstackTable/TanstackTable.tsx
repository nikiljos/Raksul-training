import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Transaction } from "../TransactionTable";
import "./TanstackTable.css";

type Props = {
  transactionData: Transaction[];
};

function TanstackTable({ transactionData }: Props) {
  const columns = [
    {
      header: "PAYER",
      accessorKey: "spender",
    },
    {
      header: "PAYMENT OF",
      accessorKey: "payment_of",
    },
    {
      header: "AMOUNT",
      accessorKey: "amount",
    },
    {
      header: "PAYMENT FOR",
      accessorKey: "benefactor",
      accessorFn: (row: Transaction) =>
        row.benefactorData.map((user) => user.name).join(","),
    },
  ];

  const table = useReactTable({
    data: transactionData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table className="tanstack-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TanstackTable;
