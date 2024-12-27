import { Heading } from "@/components/heading/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-center">
      {/* <h2 className='font-mainfont font-bold text-4xl tracking-wide'>CommitGraph</h2> */}

      <section className="relative py-24 sm:py-32 ">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div>
              <Heading>
                Manage Your Complete Repositary Without Lazy Loadings
              </Heading>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
