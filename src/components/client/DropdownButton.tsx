"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface PageProps {
  title: string;
  items: string[];
}

export default function DropdownButton({ title, items }: PageProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    const onClickOnWindow = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".dropdown-button")
      ) {
        setIsDropdownVisible(false);
      }
    };
    window.addEventListener("mousedown", onClickOnWindow);

    return () => {
      window.removeEventListener("mousedown", onClickOnWindow);
    };
  }, []);

  const handleNavigationClick = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        className="font-light text-gray-500"
      >
        {title}
      </button>
      {isDropdownVisible && (
        <div className="absolute right-0 mt-2 bg-white border border-gray-500 shadow-lg w-48 rounded-lg">
          {items.map((i) => (
            <Link
              className="block px-4 py-2 hover:bg-gray-500 hover:text-white dropdown-button"
              key={i}
              href={`/category/${i}`}
              passHref={true}
              onClick={() => handleNavigationClick()}
            >
              {i}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
