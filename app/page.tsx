import Hero from "./components/hero";
import Feature from "@/components/ui/feature";
import ExternalLink from "@/components/ui/external-link";
import CardSec from "@/components/ui/card-sec";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import sweetHomeImage from "@/assets/sweet-home.png";
import sourceCodeImage from "@/assets/source-code.png";
import nextjsImage from "@/assets/next-js.png";
import webSearchImage from "@/assets/web-search.png";
import workingAtHomeImage from "@/assets/working-at-home.png";
import imagesImage from "@/assets/images.png";
import landingPageImage from "@/assets/landing-page.png";
import waitingForYouImage from "@/assets/waiting-for-you.png";

export default function LandingPage() {
  return (
    <main className="bg-white">
      <Hero />

      <div className="mx-auto w-full max-w-4xl px-5">
        <Feature
          image={webSearchImage}
          title="What is this?"
          text="This is a Next.js application."
        />

        <hr className="text-border" />

        <Feature
          image={workingAtHomeImage}
          title="Why did you make this?"
          text="To learn Next.js"
          reverse
        />

        <hr className="text-border" />

        <Feature
          image={imagesImage}
          title="From where did you get these images?"
        >
          <ExternalLink href="https://undraw.co/">Undraw.co</ExternalLink>
        </Feature>

        <hr className="text-border" />

        <Feature
          image={landingPageImage}
          title="What about the banner image?"
          reverse
        >
          <ExternalLink href="https://pixabay.com/">Pixabay</ExternalLink>
        </Feature>
      </div>

      <div className="flex flex-col gap-8 p-8 justify-center items-center w-full bg-gray-100">
        <h1 className="text-center text-xl">What's in here</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 max-w-4xl">
          <CardSec image={sweetHomeImage} title="Pages" />
          <CardSec image={sourceCodeImage} title="Code" />
          <CardSec image={nextjsImage} title="Next.js" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-5">
        <Feature image={waitingForYouImage} title="What should I do now?">
          {" "}
          <Link href="/home">
            <Button>Open App</Button>
          </Link>
        </Feature>
      </div>
    </main>
  );
}
