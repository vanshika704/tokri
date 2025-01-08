import  { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-menu]");
    elements.forEach(main => {
      main.addEventListener("click", function () {
        const element = main.parentElement.parentElement;
        const indicators = main.querySelectorAll("svg");
        const child = element.querySelector("#sect");
        child.classList.toggle("hidden");
        indicators[0].classList.toggle("rotate-180");
      });
    });

    return () => {
      elements.forEach(main => {
        main.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
        <img
          className="mt-6 w-full"
          alt="image of a girl posing"
          src="https://i.ibb.co/qxkRXSq/component-image-two.png"
        />
      </div>

      <div className="md:hidden">
        <img
          className="w-full"
          alt="image of a girl posing"
          src="https://i.ibb.co/QMdWfzX/component-image-one.png"
        />
        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
          />
          <img
            alt="image-tag-one"
            className="md:w-48 md:h-48 w-full"
            src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
          />
        </div>
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">
            Balenciaga Fall Collection
          </p>
          <h1 className="lg:text-2xl text-xl font-semibold text-gray-800 mt-2">
            Balenciaga Signature Sweatshirt
          </h1>
        </div>

        {/* Colors Section */}
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-base leading-4 text-gray-800">Colours</p>
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-600">Smoke Blue with red accents</p>
            <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer"></div>
          </div>
        </div>

        {/* Other Sections */}
        <button className="bg-gray-800 text-white w-full py-4 hover:bg-gray-700 mt-4">
          Check availability in store
        </button>

        <p className="mt-7 text-base text-gray-600">
          It is a long established fact that a reader will be distracted by readable content...
        </p>
      </div>
    </div>
  );
}

export default Reviews;
