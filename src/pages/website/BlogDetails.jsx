import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { BlogItem } from "./Blogs";
import { IoIosArrowForward } from "react-icons/io";
import blogsBanner from "../../assets/images/blog-details.webp";
import { createUrlParam } from "../../utils/helper";
import { Helmet } from "react-helmet";
import { useBlogBySlug, usePublishedBlogs } from "../../hooks/useBlogs";
import { LoadingSpinner } from "../../components/common/LoadingSpinner";

const BlogDetails = () => {
  const params = useParams();
  const {
    data: blog,
    isLoading: blogLoading,
    error: blogError,
  } = useBlogBySlug(params.slug);
  const { data: allBlogsData } = usePublishedBlogs();

  if (blogLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (blogError || !blog) {
    return <Navigate to="/blogs" />;
  }

  const recentBlogs =
    allBlogsData?.blogs?.filter((item) => item.id !== blog.id) || [];

  return (
    <>
      <Helmet>
        <title>{blog.title} | Mecfinity AI Solutions</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.shortDesc}
        />
        {blog.metaKeywords && (
          <meta name="keywords" content={blog.metaKeywords.join(", ")} />
        )}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.metaDescription || blog.shortDesc}
        />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>
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
            <Link to="/blogs" className="text-white">
              Blogs
            </Link>
            <IoIosArrowForward />
            <h4 className="text-white">{blog.title}</h4>
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
                data-aos="fade-up"
                className="desc hyphen-auto leading-relaxed text-gray-800 border-t border-primary/30 pt-[2rem]"
              >
                <div className="html-reset" dangerouslySetInnerHTML={{ __html: blog.html }}></div>
              </div>
            </div>
          </div>
          {recentBlogs.length > 0 && (
            <div className="">
              <h2 className="heading-2">You May Also Like</h2>
              <div className="mt-[1.5rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
                {recentBlogs
                  .slice(0, 3)
                  .sort(
                    (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
                  )
                  .map((item) => (
                    <BlogItem key={item.id} blog={item} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
