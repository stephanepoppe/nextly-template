import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/5_zwift-cycling.png";

const Hero = () => {
  return (
    <div className="bg-cyan-500">
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-black-500 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white pt-10">
              Robocyclo Zwift League 2023
            </h1>
            <br></br><br></br>
            <p className="py-5 text-xl leading-normal text-white lg:text-xl xl:text-2xl dark:text-gray-300">
              Klaar om je deze winter samen met Robocyclo klaar te stomen voor het fietsvoorjaar 2023?<br></br><br></br>
              Schrijf je dan nu in!<br></br><br></br>
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/img/zwift-image.jpeg"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white rounded-md bg-orange-600">
                Inschrijven 🚀
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Zwift Cycling"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;