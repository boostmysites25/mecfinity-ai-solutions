import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { IoIosArrowForward } from "react-icons/io";
import blogsBanner from "../../assets/images/blogs.webp";
import { createUrlParam } from "../../utils/helper";

const Blogs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className=" h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          loading="lazy"
          src={blogsBanner}
          className="object-cover object-[100%_35%] h-full w-full"
          alt=""
        />
        <div className="absolute top-0 w-full h-full bg-black/50"></div>
        <div className="absolute py-2  top-[40%] left-1/2 -translate-x-1/2 w-full flex flex-col items-center px-3">
          <h1
            data-aos="fade-up"
            className="heading text-white text-center font-raleway text-[2.18rem] md:text-7xl font-bold leading-tight"
          >
            Blogs
          </h1>
          <div
            data-aos="fade-up"
            className="mt-2 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <p className="text-white">Blogs</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary/5 relative text-primary_text">
        <div className="py-[5rem] flex flex-col gap-5 items-center wrapper">
          <h4
            data-aos="fade-up"
            className="heading-2 mx-auto font-semibold leading-tight text-primary text-center"
          >
            AI, Tech & Beyond – Stay Ahead of the Curve
          </h4>
          <div className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {blogs
              .sort((a, b) => b.id - a.id)
              .map((blog) => (
                <BlogItem key={blog.id} blog={blog} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;

// blog item
export const BlogItem = ({ blog }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-secondary/5 rounded-xl p-5 text-primary_text relative z-10 group"
    >
      <Link to={`/blogs/${createUrlParam(blog.title)}`}>
        <img
          loading="lazy"
          src={blog.image}
          alt=""
          width="600"
          height="400"
          className="object-cover aspect-video w-full rounded-xl group-hover:opacity-85 transition-all duration-200"
        />
      </Link>
      <div className="flex flex-col gap-2 mt-[1rem]">
        <Link
          to={`/blogs/${createUrlParam(blog.title)}`}
          className="text-xl hyphen-auto font-medium leading-tight line-clamp-2 text-ellipsis hover:text-secondary transition-all duration-200"
        >
          {blog.title}
        </Link>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <Link
          to={`/blogs/${createUrlParam(blog.title)}`}
          className="secondary-btn w-full"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};
