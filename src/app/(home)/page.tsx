"use client";

import { BannerHm01 } from "./components/banner01";
import { Categories } from "./components/catogories";

export default function Home() {
  return (
    <div className="p-5">
      <BannerHm01 />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
