import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    children:ReactNode
    className?:string
    
}

export const Heading = ({children,className,...props} : HeadingProps) => {

    return(
        <h1 className={cn("text-4xl sm:text-5xl text-pretty font-mainfont tracking-tight  text-zinc-900",className)} {...props}>
            {children}
        </h1>
    )
}