import Image from "next/image";
import { ReactNode } from "react";

type FeatureProps = {
  title: string;
  text?: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
};

export default function Feature({
  title,
  text,
  image,
  reverse = false,
  children,
}: FeatureProps) {
  return (
    <section
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } w-full p-6`}
    >
      <div className="flex-1 flex justify-center items-center p-2">
        <Image
          src={image}
          alt="Image"
          width={500}
          height={500}
          className="object-contain w-full max-w-xs"
        />
      </div>

      <div className="flex-1 p-4 flex flex-col justify-center">
        <h2 className="text-3xl text-center pb-4">{title}</h2>
        {text && <p className="text-center">{text}</p>}
        {children}
      </div>
    </section>
  );
}
