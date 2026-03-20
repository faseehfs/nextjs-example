import Hero from "@/components/features/Hero";
import Feature from "@/components/ui/Feature";
import Footer from "@/components/layout/Footer";
import ExternalLink from "@/components/ui/ExternalLink";
import Card from "@/components/ui/Card";

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
    <main>
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

      <div className="flex flex-col gap-8 p-8 justify-center items-center w-full bg-surface">
        <h1 className="text-center text-xl">What's in here</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-3 max-w-4xl">
          <Card image={sweetHomeImage} title="Pages" />
          <Card image={sourceCodeImage} title="Code" />
          <Card image={nextjsImage} title="Next.js" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl px-5">
        <Feature
          image={waitingForYouImage}
          title="What should I do now?"
          text="Clik the Sign In button!"
        ></Feature>
      </div>
      <Footer text="This is a footer" />
    </main>
  );
}
