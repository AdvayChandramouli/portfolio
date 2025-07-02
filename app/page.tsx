import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/headshot.jpg"
          alt="Advay Chandramouli headshot"
          className=" bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 shadow-2xl border-3 border-white hover:grayscale-0"
          unoptimized
          width={300}
          height={300}
          priority
        />
      </a>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a junior at The University of Texas at Dallas, double majoring in Computer Science & Cognitive Science. 
        </p>
        <p>
          I'm passionate about building human-centered AI systems that blend intuitive design with impactful innovation.
          Recently, I've worked on machine learning pipelines for preventative healthcare diagnostics and treatment recommendations.
        </p>
        <p>
           This summer, I joined Marshall University's NSF REU in Data Analytics under Dr. Husnu Narman to research computer vision approaches for railroad infrastructure monitoring. Later this Fall, I’ll be joining Verizon’s 5G RF Engineering team in Houston, TX.
        </p>
      </div>
      <br></br>

      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      at: advaycmouli[at]gmail[dot]com.
    </section>
  );
}
