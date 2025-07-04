import React from "react";
import Image from "next/image";

export default function IconButton({
  source,
  alt_text,
  click,
}: {
  source: string;
  alt_text: string;
  click?: () => void;
}) {
  return (
    <button className="size-8 flex justify-center items-center" onClick={click}>
      <Image src={source} alt={alt_text} width={22} height={22} />
    </button>
  );
}
