import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";


interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{

    children:ReactNode
    className?:string
    href?:string

}


export const ShinyButton = ({className,children,href,...props} : ShinyButtonProps) => {
    return <Link href={href ?? "#"} className={cn("group relative flex transfom items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-zinc-900 px-8 text-base/7 font-semibold text-white transition-all duration-300 hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",className)} {...props}>
        <span className="relative z-10 flex items-center gap-2">
            {children}
            <Github className="size-6 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[7px]"/>
        </span>
    </Link>
}