
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "~/store/store";


export default function NavigationLinksLg() {
  const pathname = usePathname();
  return (
    <>
      <nav className="items-center hidden gap-2 lg:flex">
        <ul className="flex items-center gap-2 bg-[#FEFEFE] rounded-full p-1 shadow-md">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname == href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center text-(--heading-colour) border-1 border-[#FEFEFE] gap-2 px-4 py-2 text-sm lg:text-base font-semibold font-inter rounded-full transition-colors
                    ${
                      isActive
                        ? "text-white bg-(--agro-green-dark) shadow-md p-1"
                        : "text-(--agro-green-dark) hover:decoration-(--agro-green-dark) hover:shadow-md"
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

