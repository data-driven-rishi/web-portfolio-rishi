import Link from "next/link"

interface NavLinkProps {
    href: string,
    title: string
}

const NavLink = (
    {
        href,
        title
    }: NavLinkProps
) => {
    return  (
        <div>
            <Link href={href}  className="block py-2 pr-4 text-pink-200 sm:text-xl rounded md:p-0 hover:text-white">
                {title}
            </Link>
        </div>
    )
}

export default NavLink