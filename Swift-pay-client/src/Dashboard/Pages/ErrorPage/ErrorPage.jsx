import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <section className="bg-white dark:bg-red-400">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-red-600 md:text-4xl">
              Page not found
            </h1>
            <p className="mt-4">
              Sorry, the page you are looking for doesn't exist. Here are some
              helpful links:
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <Link to="/">Go back</Link>
              </button>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0 text-center">
            <img
              className="w-full pb-8 max-w-lg lg:mx-auto"
              src="https://i.ibb.co/S3r4rR0/illustration.png"
              alt=""
            />
            <h3 className="text-9xl text-gray-500  font-extralight font-serif">Error</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
