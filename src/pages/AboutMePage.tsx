import React from "react";

const AboutMePage = () => {
  return (
    <div>
      {/* <h1>Hi! I am Queenie</h1>

      <div>
        <h5>
          I guess you are here because you want to know more about me, so here
          we are
        </h5>
        <p>
          I was born and raised in Hong Kong and relocated to London in August
          2019. I am an adventurous person and always willing to take risks to
          challenge myself.
        </p>
        <p>
          Last year, I decided to learn web development, a subject that I have
          always been interested in and looking for an opportunity to change my
          career after 10 years in the advertising business.
        </p>
        <p>
          Now that I have finished my boot camp, I’m very excited and eager to
          dive into the new industry. While looking into new opportunities, I’m
          also in parallel practising TypeScript and React Native, and
          revisiting my previous projects to improve my works.
        </p>
      </div> */}

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[1000px]">
              <h2 className="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                Hi! I am Queenie <br />
                {/* <span className="text-primary text-white bg-slate-900 hover:bg-slate-200 hover:text-black">
                  and my work
                </span> */}
              </h2>
              <p className="text-lg text-neutral-800">
                I guess you are here because you want to know more about me, so
                here we are. <br />
                <br />
                I was born and raised in Hong Kong and relocated to London in
                August 2019. I am an adventurous person and always willing to
                take risks to challenge myself.
                <br />
                In 2022, I decided to learn web development, a subject that I
                have always been interested in and looking for an opportunity to
                change my career after 10 years in the advertising business.
                <br />
                Now that I have finished my boot camp, I’m very excited and
                eager to dive into the new industry. While looking into new
                opportunities, I’m also in parallel practising TypeScript and
                React Native, and revisiting my previous projects to improve my
                works.
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>
        <a href="https://github.com/KingsofQueens/">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mx-2 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#333" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </button>
        </a>

        <a href="https://www.linkedin.com/in/queenie-wong-518920118/">
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mx-2 mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#0077b5" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutMePage;
