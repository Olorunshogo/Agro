
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "~/store/store";


export default function NavigationLinksLg() {
  const pathname = usePathname();
  return (
    <>
      <nav className="items-center hidden gap-2 lg:flex">
        <ul className="flex items-center gap-2">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname == href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center text-(--heading-colour) underline-offset-6 gap-2 px-4 py-2 text-sm font-medium font-inter rounded-full transition-colors
                    ${
                      isActive
                        ? "hover:text-black underline decoration-4 decoration-(--agro-green-dark)"
                        : "text-(--heading-colour) hover:text-black hover:underline hover:decoration-4 hover:decoration-(--agro-green-dark)"
                    }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}

