"use client";

import { Input } from "@/components/ui/input";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FilterForm(props: IProps) {
  const { onChange } = props;

  return (
    <div className=" py-4">
      <Input id="filter" placeholder="Filter..." onChange={onChange} />
    </div>
  );
}
