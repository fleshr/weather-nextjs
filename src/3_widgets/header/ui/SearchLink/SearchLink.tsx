import { Link } from "@/4_shared/i18n";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";

type SearchLinkProps = {
  title: string;
  href: string;
  onClick?: () => void;
};

export const SearchLink: FC<SearchLinkProps> = ({ href, title, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 py-1"
    >
      <FiSearch className="text-gray-450 text-lg dark:text-gray-400" />
      <span>{title}</span>
    </Link>
  );
};
