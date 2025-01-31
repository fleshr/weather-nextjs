import { FC } from "react";
import { SearchLink } from "../SearchLink/SearchLink";
import { cn } from "@/4_shared/lib";
import { useTranslations } from "next-intl";
import { GeolocationResponse } from "@/4_shared/model";

type SearchResultsProps = {
  items?: GeolocationResponse;
  isLoading: boolean;
  onClick?: () => void;
};

export const SearchResults: FC<SearchResultsProps> = ({
  items,
  isLoading,
  onClick,
}) => {
  const t = useTranslations("widgets.header");
  const isEmpty = !items || items.length === 0;

  return (
    <div
      className={cn(
        "space-y-1",
        isLoading && "space-y-4.5",
        !isLoading && isEmpty && "flex items-center justify-center",
        (isLoading || isEmpty) && "min-h-44 py-1",
      )}
    >
      {isLoading &&
        Array(5)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-4.5 w-32 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"
            />
          ))}
      {!isLoading && isEmpty && (
        <span className="text-gray-450 dark:text-gray-400">
          {t("resultsEmpty")}
        </span>
      )}
      {!isLoading &&
        !isEmpty &&
        items.map(({ name, country, lat, lon }) => (
          <SearchLink
            key={`${lat}-${lon}`}
            onClick={onClick}
            href={`/?lat=${lat}&lon=${lon}`}
            title={`${name}, ${country}`}
          />
        ))}
    </div>
  );
};
