import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Orders } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<Orders>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <div className="lowercase">
          <img src={row.getValue("image")} alt="Product Image" style={{ width: '50px', height: '50px' }} />
        </div>
      ),
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("name")}</div>
        ),
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("date")}</div>
        ),
    },
    {
      accessorKey: "product",
      header: "Product",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("product")}</div>
      ),
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "size",
      header: "Size",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("size")}</div>
      ),
    },
    {
      accessorKey: "qty",
      header: "Quantity",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("qty")}</div>
      ),
    },
    {
      accessorKey: "metalBar",
      header: "Metal Bar",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("metalBar")? "true" : "false"}</div>
      ),
    },
    {
      accessorKey: "base",
      header: "Base",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("base")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original;
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View customer</DropdownMenuItem>
              <DropdownMenuItem>View payment details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];