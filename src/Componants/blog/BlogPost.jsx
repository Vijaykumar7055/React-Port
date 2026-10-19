
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";

const BlogPost = ({ post, onBack }) => {
  if (!post) {
    return (
      <section className="w-full min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <MdOutlineArticle className="text-5xl text-emerald-600 dark:text-emerald-400 mb-4" />

        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Blog post not found
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          The article you're looking for doesn't exist.
        </p>

        <button
          type="button"
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition-all hover:bg-emerald-700"
        >
          <IoMdArrowRoundBack className="text-xl" />
          Back to Blogs
        </button>
      </section>
    );
  }

  return (
    <article className="w-full min-h-screen py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-white px-4 py-2.5 font-semibold text-emerald-700 transition-all hover:bg-emerald-50 hover:border-emerald-400 dark:border-[#26372F] dark:bg-[#111820] dark:text-emerald-400 dark:hover:bg-[#19382C]"
        >
          <IoMdArrowRoundBack className="text-xl" />
          Back to Blogs
        </button>

        {/* Article Header */}
        <header className="mb-8">
          {post.category && (
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:bg-[#19382C] dark:text-emerald-300">
              {post.category}
            </span>
          )}

          <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>
          )}

          <div className="mt-7 h-1 w-20 rounded-full bg-emerald-500" />
        </header>

        {/* Featured Image */}
        {post.src && (
          <div className="mb-10 overflow-hidden rounded-2xl border border-emerald-100 bg-[#E8F1EA] dark:border-[#26372F] dark:bg-[#111820]">
            <img
              src={post.src}
              alt={post.title}
              className="w-full max-h-[480px] object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8 md:p-10 dark:border-[#26372F] dark:bg-[#111820]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-[#19382C] dark:text-emerald-400">
              <MdOutlineArticle className="text-2xl" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Article Overview
            </h2>
          </div>

          <div className="whitespace-pre-line text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
            {post.content || post.decs || "No article content available."}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-8 border-t border-emerald-100 pt-6 dark:border-[#26372F]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 font-semibold text-emerald-700 transition-all hover:gap-3 dark:text-emerald-400"
          >
            <IoMdArrowRoundBack className="text-xl" />
            Explore More Articles
          </button>
        </div>

      </div>
    </article>
  );
};

export default BlogPost;
