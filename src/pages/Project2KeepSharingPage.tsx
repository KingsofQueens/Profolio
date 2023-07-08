import React from "react";
import { Link } from "react-router-dom";

const Project2KeepSharingPage = () => {
  return (
    <div>
      <div className="p-8 m-8">
        <div
          className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(https://ik.imagekit.io/auewbfj8o/KeepSharing/KeepSharingHeader.jpg)`,
            height: "400px",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="text-white content-center">
                <h2 className="font-semibold text-3xl mb-4 md:text-4xl">
                  KEEP SHARING
                </h2>
                <h4 className="font-semibold text-l w-3/4 mb-6 mx-auto md:text-xl ">
                  A group project to create an event sharing site by using
                  Express.js and handlebar to preform authentication features
                  and CRUD operation.
                </h4>
                <Link to="HTTPS://KEEP-SHARING.UP.RAILWAY.APP/">
                  {" "}
                  Go to the site
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-12">
        <h2 className="text-2xl font-bold text-gray-900">Application Usage</h2>
        <p>HTML, CSS, NodeJS, ExpressJS, mongoDB, Bootstrap SASS</p>
      </div>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Project Function
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div className="group relative mb-10">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/Homepage.jpg"
                    alt="Queer History Month Homepage"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <span className="absolute inset-0"></span>
                  Homepage
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Navigation bar to navigate to other page of the site.
                </p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/Signup.jpg"
                    alt="Queer History Month Signup function"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href="#"> */}
                  <span className="absolute inset-0"></span>
                  Sign up for an account
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Create account function and store created account data on
                  MongoDB Atlas Database.
                </p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/Login.jpg"
                    alt="Queer History Month Login function"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href="#"> */}
                  <span className="absolute inset-0"></span>
                  Login user account
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Authenticatie user function and retrieve stored user
                  information from database and display in profile page.
                </p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/CreateEvent.jpg"
                    alt="Create Events"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href="#"> */}
                  <span className="absolute inset-0"></span>
                  Create Events
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Create event and store relative information in database.
                </p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/EditDeleteEvent.jpg"
                    alt="Edit and detele events"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href="#"> */}
                  <span className="absolute inset-0"></span>
                  Edit and Delete Events
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Read and update information stored in database or delete
                  information completely.
                </p>
              </div>
              <div className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src="https://ik.imagekit.io/auewbfj8o/QHM/GoogleAPI.jpg"
                    alt="Google Maps API"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  {/* <a href="#"> */}
                  <span className="absolute inset-0"></span>
                  Google Maps API
                  {/* </a> */}
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  Use marker functions from Google Maps API to display related
                  tour information on map.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/portfolio/">
        <h4 className="hover:">→ Back to the profolio list</h4>
      </Link>
    </div>
  );
};

export default Project2KeepSharingPage;
