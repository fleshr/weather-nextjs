import { useTranslations } from "next-intl";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onLocationClick: () => void;
};

export const SearchBar: FC<SearchBarProps> = ({
  value,
  onChange,
  onLocationClick,
}) => {
  const t = useTranslations("widgets.header");

  return (
    <div className="relative w-full">
      <label className="relative block">
        <FiSearch className="text-gray-450 absolute top-1/2 left-2.5 -translate-y-1/2 text-lg md:text-xl dark:text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="placeholder:text-gray-450 h-8 w-full rounded-lg bg-gray-50 pr-10 pl-9.5 text-sm ring-1 ring-black/15 focus:ring-2 focus:ring-black/80 focus:outline-none md:h-8.5 md:pr-10.5 md:pl-10 md:text-base dark:bg-blue-700 dark:text-white dark:ring-white/10 dark:placeholder:text-gray-400 dark:focus:ring-white/50"
        />
      </label>
      <button
        type="button"
        onClick={() => onLocationClick()}
        className="text-gray-450 absolute top-1/2 right-1.5 flex size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg transition hover:bg-black/20 hover:text-gray-500 md:size-7.5 dark:hover:bg-white/20"
      >
        <TbLocation className="text-lg md:text-xl" />
      </button>
    </div>
  );
};
