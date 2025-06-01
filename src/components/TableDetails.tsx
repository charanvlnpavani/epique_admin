import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import ButtonClick from "./ButtonClick";
import { tableDetails } from "@/dataset/tableDetails";
import { Pencil } from "lucide-react";

const TableDetails = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-100 font-bold">
          <TableHead className="w-[100px] sticky-header">ID</TableHead>
          <TableHead className="w-[200px] sticky-header">Story Name</TableHead>
          <TableHead className="w-[200px] sticky-header">Categories</TableHead>
          <TableHead className="w-[200px] sticky-header">Story Type</TableHead>
          <TableHead className="w-[200px] sticky-header">Publish</TableHead>
          <TableHead className="w-[200px] sticky-header">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableDetails.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-[100px]">{item.id}</TableCell>
            <a
              href={`/stories/view/${item.id}`}
              className="no-underline text-blue-600 hover:text-blue-500 hover:underline cursor-pointer"
            >
              <TableCell className="w-[200px] pt-4 ">
                {item.storyName}
              </TableCell>
            </a>
            <TableCell className="w-[200px]">{item.categories}</TableCell>
            <TableCell className="w-[200px]">{item.storyType}</TableCell>
            <TableCell className="w-[200px]">{item.publish}</TableCell>
            <TableCell className="w-[200px]">
              <ButtonClick
                label=""
                onClick={() => {
                  // Handle edit action here
                  window.location.href = `/stories/update/${item.id}`;
                }}
                variant="link"
                className="text-blue-600 hover:text-blue-500 pl-0 cursor-pointer"
                icon={<Pencil className="size-4" />}
                iconPosition="left"
                size="default"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDetails;
