import { Card, CardDescription } from "@/components/ui/card";
import Image from "next/image";

export default async function Home() {
  const getAllCountris = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
    );
    return res.json();
  };

  const data = await getAllCountris();

  return (
    <main className="container mx-auto px-4 flex flex-wrap gap-8 justify-center">
      {data?.map((country) => (
        <Card key={country?.name?.common} className="flex flex-col w-[220px]">
          <Image
            src={country?.flags?.svg || country?.flags?.png}
            alt="country flag"
            height={0}
            width={0}
            className="h-auto w-auto"
          />
          <div className="border-[1px] rounded-b-lg p-4 flex flex-col flex-1 mb-auto justify-center gap-1">
            <CardDescription className="text-xl md:text-xl text-black font-bold">
              {country?.name?.common}
            </CardDescription>
            <CardDescription>
              <span className="font-bold">Population:</span>{" "}
              {country?.population?.toLocaleString()}
            </CardDescription>
            <CardDescription>
              <span className="font-bold">Region:</span> {country?.region}
            </CardDescription>
            <CardDescription>
              <span className="font-bold">Capital:</span>{" "}
              {country?.capital?.join(", ")}
            </CardDescription>
          </div>
        </Card>
        // <div key={el?.name?.common}>{el?.name?.common}</div>
      ))}
    </main>
  );
}
