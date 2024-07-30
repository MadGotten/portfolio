export default function Technology() {
  return (
    <div className="flex flex-col items-center gap-6 pt-20">
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
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </h2>
      <div className="flex items-center gap-8"></div>
    </div>
  );
}
