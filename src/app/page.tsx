"use client";

import { CardCountry } from "@/components/cardCountry";
import { useQuery } from "@tanstack/react-query";

interface CountryI {
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  region: string;
  flags: {
    svg: string;
    png: string;
  };
}

export default function Home() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["countriesData"],
    queryFn: async () => {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
      );
      return await response.json();
    },
  });

  return (
    <main className="container mx-auto px-4 flex flex-wrap gap-8 justify-center">
      {data?.map((country: CountryI) => (
        <CardCountry
          key={country?.name?.common}
          flag={country?.flags?.svg || country?.flags?.png}
          countryName={country?.name?.common}
          population={country?.population}
          region={country?.region}
          capital={country?.capital}
        />
      ))}
    </main>
  );
}
