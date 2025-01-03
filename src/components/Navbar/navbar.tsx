import { MaxWidthWrapper } from "../max-width-wrapper"


export const Navbar = () => {
    // using sticky to make it fixed on the top // 
    // inset-x-0 to spans from left to the right // 
    // added backgrop-blur-lg to add that blurr effect behind // 


    // using our maxwidhtwrapper for proper unified width of the landing page // 
    return <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <MaxWidthWrapper>
            
        </MaxWidthWrapper>

    </nav>

}