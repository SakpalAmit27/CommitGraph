
import { Heading } from "@/components/heading/heading";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { ShinyButton } from "@/components/ShinyButton/shiny-button";

export default function Home() {
  return (
    <>
      {/* <h2 className='font-mainfont font-bold text-4xl tracking-wide'>CommitGraph</h2> */}

      <section className="relative py-24 sm:py-32 ">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10 max-w-2xl">
            <div>
              <Heading>
                <span>Your Commit History, </span>
                <br />
                <span className="relative bg-gradient-to-r from-zinc-600 to-zinc-900 bg-clip-text text-transparent">
                  Made Effortless.
                </span>
              </Heading>
            </div>
            <p className="font-sans text-base/7 text-gray-600 max-w-prose">
              CommitGraph is the Easiest Way to Monitor Your Commits Without any
              Problems ! , Say Goodbye to lazy{" "}
              <span className="font-semibold text-gray-700">Back Buttons</span>{" "}
              <br />
              By{" "}
              <span className="font-semibold text-gray-700">
                Visualizing Them into a Numbered Graph{" "}
              </span>{" "}
              For Better Understanding !
            </p>

            <div className="w-full max-w-80">
              <ShinyButton className="relative z-10 h-11 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl">Connect To Github</ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
