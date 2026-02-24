import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-[var(--slate-500)] hover:text-[var(--blue)] transition-colors duration-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[var(--slate-200)]" />
              {isLast || !item.href ? (
                <span className="font-semibold text-[var(--slate-800)]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--slate-500)] hover:text-[var(--blue)] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
