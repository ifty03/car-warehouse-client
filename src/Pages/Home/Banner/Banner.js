import { Link } from "react-router-dom";
import Carosel from "../../Carosel/Carosel";

const Banner = () => {
  return (
    <div>
      <section className="bg-coolGray-100 text-coolGray-800">
        <div className="container grid lg:grid-cols-2 grid-cols-1 md:p-6 mx-auto sm:py-5 lg:pt-20 lg:pb-16 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="md:text-5xl text-3xl font-bold leading-none  sm:text-6xl">
              Your
              <span className="text-violet-600 leading-relaxed"> Dream </span>
              Our Commitment
            </h1>
            <p className="mt-6 mb-8 md:text-center lg:text-left sm:text-left text-lg sm:mb-12">
              if you want to buy a stock. We are the best and safe
              <br className="hidden md:inline lg:hidden" />
              choice for you. So come to us without wasting your time.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/manageItemMain"
                className="px-8 py-3 text-lg hover:bg-violet-700  font-semibold rounded bg-violet-600 text-white"
              >
                Manage Item
              </Link>
              <Link
                to="/addNewItem"
                className="px-8 py-3 text-lg hover:border hover:border-violet-700 hover font-semibold border hover:text-violet-600 rounded border-coolGray-800"
              >
                Add Item
              </Link>
            </div>
          </div>
          <div
            className="flex items-center justify-center p-6 mt-8 lg:mt-0 
          sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          >
            <Carosel></Carosel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
