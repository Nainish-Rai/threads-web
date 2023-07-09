"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

type Props = {};

function SearchBar({}: Props) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <div>
      <form className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="ID"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
        <Link href={`/user/${searchTerm}/a`}>
          <Button>GET</Button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
