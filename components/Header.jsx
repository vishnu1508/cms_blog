import React from "react";
import Link from "next/link";

const categories = [
  { name: "react", slug: "react" },
  { name: "web Development", slug: "webdev" },
];

function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className=" w-full inline-block border-b-blue-500 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-gray-800">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => {
            return (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-gray-800 ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
