"use client";

import { Input } from "@/components/ui/input";

export function FilterForm() {
  return (
    <div className=" py-4">
      <Input id="filter" placeholder="Filter..." />
    </div>
  );
}
