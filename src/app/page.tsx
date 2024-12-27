import { Heading } from "@/components/heading/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <>
      {/* <h2 className='font-mainfont font-bold text-4xl tracking-wide'>CommitGraph</h2> */}

      <section className="relative py-24 sm:py-32 ">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10 max-w-2xl">
            <div>
              <Heading>
                <span>Analyze Your Commits ,</span>
                <br />
                <span className="relative bg-gradient-to-r from-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                  Without Pressing Unnecessary Back Buttons !
                </span>
              </Heading>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
