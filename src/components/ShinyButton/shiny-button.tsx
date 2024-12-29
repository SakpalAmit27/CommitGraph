import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";


interface ShinyButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement>{

}


export const ShinyButton = ({className,children,href,...props} : ShinyButtonProps) => {
    return <Link href={href ?? "#"} className={cn("group relative flex transfom items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-zinc-700 px-8 text-base/7 font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2",className)} {...props}>
        <span></span>
    </Link>
}