import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Thanks for Download WebGPT Browser Extension
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-600">Unlock</span> ChatGPT&apos;s power on any webpage
        </h1>

        <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
          Enhance your browsing experience: Ask questions about the current page or request a summary of its content.
        </p>

        <Link
          id="start_gpt"
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={""}
        >
          Click to start WebGPT
        </Link>
      </MaxWidthWrapper>



      {/* Features */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mt-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40 ">
          {/* Scenarios */}
          <div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                  KEY FEATURES
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Simple, yet powerful features
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-6 md:flex-row">
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Chat with Website</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Ask questions to blogs, articles or news with WebGPT
                  </CardDescription>
                  <Image
                    src="/webpage.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Chat with Document</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Chat with PDF, DOCX, TXT, CSV files opened on browser. Chat with Resume, contracts and many more
                  </CardDescription>
                  <Image
                    src="/document.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>

                <Card className="flex flex-col items-center justify-center gap-2 p-6 md:flex-1">
                  <CardTitle>Summarize Content</CardTitle>
                  <CardDescription className="mb-3 text-center">
                    Summarize webpage, pdf, documents, docx and many more
                  </CardDescription>
                  <Image
                    src="/briefly.png"
                    alt="cafe scenario"
                    width={128}
                    height={128}
                    quality={100}
                  />
                </Card>
              </div>
            </div>
            <div className="mb-6 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <p className="mt-4 text-lg text-gray-600">and many more...</p>
              </div>
            </div>
          </div>

        </div>
        <Link
          id="start_gpt"
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={""}
        >
          Click to start WebGPT
        </Link>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
