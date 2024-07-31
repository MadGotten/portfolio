export default function Technology() {
  return (
    <div className="flex flex-col items-center gap-8 pt-20">
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-yellow text-black flex gap-2 items-center">
          Technology
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 4L6 28H24L22 44L42 20H24L26 4Z"
              className="stroke-black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h2>
      <div className="flex flex-col justify-start gap-8 w-full sm:w-fit md:text-xl md:font-medium text-lg font-normal">
        <div className="flex flex-col gap-2">
          <h4 className="md:text-2xl text-xl font-semibold">Languages</h4>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div className="px-5 py-3 border border-light rounded text-center">
              Python
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Javascript
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              PHP
            </div>
            <div className="grid grid-cols-2 gap-2 sm:col-span-2">
              <div className="px-5 py-3 border border-light rounded text-center">
                HTML
              </div>
              <div className="px-5 py-3 border border-light rounded text-center">
                CSS
              </div>
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              SQL
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h4 className="text-2xl font-semibold">Frontend</h4>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div className="grid grid-cols-2 gap-2 sm:col-span-2">
              <div className="px-5 py-3 border border-light rounded text-center">
                React
              </div>
              <div className="px-5 py-3 border border-light rounded text-center">
                Next.js
              </div>
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              TailwindCSS
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Bootstrap
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              SCSS
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h4 className="text-2xl font-semibold">Backend</h4>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">
            <div className="grid grid-cols-2 gap-2 sm:col-span-2">
              <div className="px-5 py-3 border border-light rounded text-center">
                Django
              </div>
              <div className="px-5 py-3 border border-light rounded text-center">
                Flask
              </div>
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Express.js
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Laravel
            </div>
            <div className="grid grid-cols-2 gap-2 sm:col-span-2">
              <div className="px-5 py-3 border border-light rounded text-center">
                MySQL
              </div>
              <div className="px-5 py-3 border border-light rounded text-center">
                PostgreSQL
              </div>
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              MongoDB
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Firebase
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start gap-2">
          <h4 className="text-2xl font-semibold">Tools</h4>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-2">
            <div className="px-5 py-3 border border-light rounded text-center">
              Git
            </div>
            <div className="px-5 py-3 border border-light rounded text-center">
              Docker
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
