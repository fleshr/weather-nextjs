"use client";

import { useState } from "react";
import { cn } from "@/4_shared/lib";
import { Container } from "@/4_shared/ui";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import { MenuButton } from "../MenuButton/MenuButton";
import { useGeolocation } from "../../lib/useGeolocation";
import { useDebounce } from "use-debounce";
import { SearchResults } from "../SearchResults/SearchResults";
import { useLocale } from "next-intl";

export const Header = () => {
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);
  const { data, isLoading } = useGeolocation(
    debouncedSearchQuery,
    locale as "ru" | "en",
  );

  return (
    <div className="shadow-b-px relative z-10 bg-white dark:bg-blue-800 dark:shadow-white/10">
      <Container className="relative flex h-12.5 items-center justify-between max-md:pl-4 md:grid md:h-14 md:grid-cols-[1fr_min(40%,25rem)_1fr]">
        <Logo />
        <MenuButton
          className="md:hidden"
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={cn(
            "fixed inset-0 hidden max-md:bg-white md:relative md:block dark:max-md:bg-blue-800",
            isOpen && "block",
          )}
        >
          <div className="flex items-center max-md:h-12.5 max-md:pr-12.5 max-md:pl-4">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onLocationClick={() => {}}
            />
          </div>
          {searchQuery && (
            <div className="px-6.5 md:absolute md:mt-1.5 md:w-full md:rounded-lg md:bg-white md:px-4 md:py-2 md:ring-1 md:shadow-md md:shadow-black/5 md:ring-black/10 dark:text-white md:dark:bg-blue-700 md:dark:ring-white/10">
              <SearchResults
                items={data}
                onClick={() => {
                  setSearchQuery("");
                  setIsOpen(false);
                }}
                isLoading={isLoading || searchQuery !== debouncedSearchQuery}
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
