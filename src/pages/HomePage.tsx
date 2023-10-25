import React from "react";

const Home = () => {
  return (
    <div>
      {/* <img src="https://ik.imagekit.io/auewbfj8o/Queeniebw.jpg" alt="Myself" /> */}

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[800px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                This is about me <br />
                <span className="text-primary text-white bg-slate-900 hover:bg-slate-200 hover:text-black">
                  and my work
                </span>
              </h2>
              <p className="text-lg text-neutral-500 dark:text-neutral-300">
                Hope you find my work interesting
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
