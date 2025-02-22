import React from "react";

const LatestIT = () => {
  return (
    <div className="w-full h-full p-10 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <div className="w-full space-y-5 text-center mb-8">
          <h1 className="text-lg font-semibold">Latest from OMBASE LIMITED</h1>
          <h1 className="text-2xl sm:text-4xl font-bold">What's Happening</h1>
        </div>

        {/* Cards Section */}
        <div className="w-full overflow-x-auto flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {/* Card 1 */}
          <div className="flex-shrink-0 card-compact w-80 sm:w-full bg-base-100 drop-shadow-lg h-full flex flex-col">
            <figure>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/121224-dell-newsroom-480x360.jpg?wid=480&amp;hei=360"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body bg-ombase text-white flex flex-col justify-between">
              <h2 className="card-title line-clamp-3">What Makes Ombase Laptops Stand Out in the Market?</h2>
              <p className="line-clamp-2">
              Ombase laptops combine cutting-edge performance, premium build quality, and tailored features to meet the demands of professionals and power users alike.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-white">
                  Explore &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 card-compact w-80 sm:w-full bg-base-100 drop-shadow-lg h-full flex flex-col">
            <figure>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/121224-dell-newsroom-480x360.jpg?wid=480&amp;hei=360"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body bg-ombase text-white flex flex-col justify-between">
              <h2 className="card-title">AI and Cloud Computing</h2>
              <p>
              How Modern Servers Are Evolving.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-white">
                  Explore &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 card-compact w-80 sm:w-full bg-base-100 drop-shadow-lg h-full flex flex-col">
            <figure>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/121224-events-480x360.jpg?wid=480&amp;hei=360"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body bg-ombase text-white flex flex-col justify-between">
              <h2 className="card-title">Ombase</h2>
              <p>
                A versatile tech OEM crafting an extensive array of computing
                devices, from desktops and Chromebooks to all-in-ones, laptops,
                workstations.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-white">
                  Explore &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 card-compact w-80 sm:w-full bg-base-100 drop-shadow-lg h-full flex flex-col">
            <figure>
              <img
                src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/hp-banner-esg-480x360-jpg.jpg?wid=480&amp;hei=360"
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body bg-ombase text-white flex flex-col justify-between">
              <h2 className="card-title">Ombase</h2>
              <p>
                A versatile tech OEM crafting an extensive array of computing
                devices, from desktops and Chromebooks to all-in-ones, laptops,
                workstations.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline text-white">
                  Explore &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full mt-8 flex flex-col sm:flex-row justify-center items-center gap-5">
          <button className="btn btn-outline text-ombase">
            View Newsroom -&gt;
          </button>
          <button className="btn btn-outline text-ombase">
            Visit Blog -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestIT;
