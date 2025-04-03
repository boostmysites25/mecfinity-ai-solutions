import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BlogItem } from "./Blogs";
import WebsiteHeader from "../../components/website/WebsiteHeader";
import WebsiteFooter from "../../components/website/WebsiteFooter";
import { blogs } from "../../data/blogs";
import { IoIosArrowForward } from "react-icons/io";
import blogsBanner from "../../assets/images/blog-details.webp";
import { createUrlParam } from "../../utils/helper";

const BlogDetails = () => {
  const params = useParams();
  const blog = blogs.find(
    (item) => createUrlParam(item.title) === params.title
  );
  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  const recentBlogs = blogs.filter((item) => item.title !== blog.title) || [];
  return (
    <>
      <WebsiteHeader />
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
            className="mt-5 text-base sm:text-xl font-medium px-3 py-2 w-fit rounded-full  flex flex-wrap justify-center text-white items-center gap-1 sm:gap-2"
          >
            <Link to="/">Home</Link>
            <IoIosArrowForward />
            <h4 className="text-white">Blogs</h4>
          </div>
        </div>
      </div>
      <div className="relative text-primary_text">
        <div className="wrapper pt-8 pb-[2rem] relative z-10">
          <div className="flex flex-col gap-2 pb-[3rem] p-3 sm:p-5 rounded-xl mb-[3rem]">
            <div
              className="relative rounded-xl overflow-hidden bg-cover before:absolute before:inset-0 before:bg-black/30 before:backdrop-blur-md"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <img
                loading="lazy"
                data-aos="fade-up"
                src={blog.image}
                alt=""
                className="relative w-full object-cover aspect-[4/3] max-h-[70vh] max-w-4xl mx-auto"
              />
            </div>

            <div className="flex flex-col gap-2">
              <h4
                data-aos="fade-up"
                className="heading-2 leading-tight mt-[1rem] pb-[1.5rem]"
              >
                {blog.title}
              </h4>
              <div
                dangerouslySetInnerHTML={{ __html: blog.html }}
                data-aos="fade-up"
                className="desc hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              ></div>
            </div>
          </div>
          {recentBlogs.length > 0 && (
            <div className="">
              <h2 className="heading-2">You May Also Like</h2>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {blogs
                  .filter((item) => item.id !== blog.id)
                  .slice(0, 3)
                  .sort((a, b) => b.id - a.id)
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <WebsiteFooter />
    </>
  );
};

export default BlogDetails;
