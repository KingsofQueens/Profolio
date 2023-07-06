import React from "react";

const Project3QHMPage = () => {
  return (
    <div>
      Project3 - Queer History Month
      <div className="p-8 m-8">
        <div
          className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/auewbfj8o/Queeniebw.jpg)`,
            height: "400px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white">
                <h2 className="font-semibold text-3xl mb-4 md:text-4xl">
                  Queer History Month
                </h2>
                <h4 className="font-semibold text-l mb-6 md:text-xl">
                  Project Summary
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>Project Name</h4>
      <h4>Project Background</h4>
    </div>
  );
};

export default Project3QHMPage;
