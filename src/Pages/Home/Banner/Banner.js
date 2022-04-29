import { Link } from "react-router-dom";
import banner from "../../../media/banner.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-coolGray-100 text-coolGray-800">
        <div className="container flex  flex-col-reverse justify-center md:p-6 mx-auto sm:py-5 lg:pt-20 lg:pb-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="md:text-5xl text-3xl font-bold leading-none  sm:text-6xl">
              Ac mattis
              <span className="text-violet-600">senectus</span>erat pharetra
            </h1>
            <p className="mt-6 mb-8 md:text-center lg:text-left sm:text-left text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
              <br className="hidden md:inline lg:hidden" />
              turpis pulvinar, est scelerisque ligula sem
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/"
                className="px-8 py-3 text-lg hover:bg-violet-700  font-semibold rounded bg-violet-600 text-white"
              >
                Suspendisse
              </Link>
              <Link
                to="/"
                className="px-8 py-3 text-lg hover:border hover:border-violet-700 hover font-semibold border hover:text-violet-600 rounded border-coolGray-800"
              >
                Malesuada
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={banner}
              alt=""
              className="object-contain rounded-xl h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
