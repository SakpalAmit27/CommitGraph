import { MaxWidthWrapper } from "@/components/max-width-wrapper";


export default function Home() {
  return (
    <div className="flex items-center flex-col text-center">

      {/* <h2 className='font-mainfont font-bold text-4xl tracking-wide'>CommitGraph</h2> */}

      <MaxWidthWrapper>
         <div className="relative mx-auto text-center flex flex-col items-center gap-10">
          <div>
            <h1 className="font-mainfont font-bold text-4xl tracking-wide">CommitGraph</h1>
          </div>
         </div>
      </MaxWidthWrapper>

    </div>
  );
}
