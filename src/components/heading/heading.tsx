import { HTMLAttributes, ReactNode } from "react"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>{
    children:ReactNode
    className?:string
    
}

export const heading = ({children,className} : HeadingProps) => {

}