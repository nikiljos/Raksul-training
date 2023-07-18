import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Transaction } from "../TransactionTable";
import "./TanstackTable.css";
import { useAppSelector } from "../../../../hooks";

type Props = {
  transactionData: Transaction[];
};

function TanstackTable({ transactionData }: Props) {
  const auth = useAppSelector((state) => state.auth);
  const columns = [
    {
      header: "PAYER",
      accessorKey: "spenderName",
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
      header: "SHARE",
      accessorKey: "individualShare",
    },
    {
      header: "PAYMENT FOR",
      accessorKey: "benefactor",
      accessorFn: (row: Transaction) =>
        row.benefactorData.map((user) => user.name).join(", "),
    }
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
          {table.getRowModel().rows.map((row) => {
            const isOwed=row.original.benefactorData.find((user) => user.id === auth.user.id)
            const isSpender=row.original.spender===auth.user.id
            return (
              <tr key={row.id} style={{backgroundColor:(isSpender?"#d9ead3":isOwed?"#fce5cd":"")}}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TanstackTable;
