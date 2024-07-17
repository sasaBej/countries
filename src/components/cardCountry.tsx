"use client";

import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

interface Props {
  flag: string;
  countryName: string;
  population: number;
  region: string;
  capital: string[];
}

export const CardCountry = ({
  flag,
  countryName,
  population,
  region,
  capital,
}: Props) => {
  return (
    <Card
      onClick={() => console.log("click")}
      className="flex flex-col w-[220px] cursor-pointer"
    >
      <Image
        src={flag}
        alt="country flag"
        height={0}
        width={0}
        className="h-auto w-auto"
      />
      <div className="border-[1px] rounded-b-lg p-4 flex flex-col flex-1 mb-auto justify-center gap-1">
        <CardDescription className="text-xl md:text-xl text-black font-bold">
          {countryName}
        </CardDescription>
        <CardDescription>
          <span className="font-bold">Population:</span>{" "}
          {population.toLocaleString()}
        </CardDescription>
        <CardDescription>
          <span className="font-bold">Region:</span> {region}
        </CardDescription>
        <CardDescription>
          <span className="font-bold">Capital:</span> {capital.join(", ")}
        </CardDescription>
      </div>
    </Card>
  );
};
