
import { useState } from "react";
import BlogPost from "./BlogPost";
import {
  projectSix,
  projectFour,
  projectfive,
  Projectseven,
  projecteight,
  Ecommerce,
} from "../../assets/index";
import { MdOutlineArrowOutward, MdOutlineExpandMore } from "react-icons/md";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Getting Started with React.js",
      category: "Frontend Development",
      excerpt:
        "Learn how React components, props, and state help you build interactive user interfaces.",
      decs:
        "React makes frontend development easier through reusable components and declarative UI. Understanding JSX, props, state, and hooks is a great starting point for building modern web applications.",
      content:
        "React is a JavaScript library for building user interfaces. Start by understanding components, JSX, props, and state. Then explore hooks such as useState and useEffect, component composition, event handling, and React Router. Practice by building small projects and gradually add API integration and responsive styling.",
      src: projectSix,
    },
    {
      id: 2,
      title: "Building a MERN Stack Application",
      category: "Full Stack Development",
      excerpt:
        "Explore how MongoDB, Express.js, React.js, and Node.js work together in a full-stack application.",
      decs:
        "The MERN stack combines a React frontend with a Node.js and Express backend and MongoDB database. It allows developers to build full-stack applications using JavaScript across the entire development process.",
      content:
        "A MERN application usually has four major parts: MongoDB stores application data, Express.js handles API routes, Node.js runs the backend, and React renders the frontend. A good learning project can include authentication, CRUD operations, form validation, and API error handling. Keep environment variables private and validate incoming requests on the backend.",
      src: Ecommerce,
    },
    {
      id: 3,
      title: "Why Responsive Web Design Matters",
      category: "Web Design",
      excerpt:
        "Discover how flexible layouts and responsive design make websites work across different screen sizes.",
      decs:
        "A responsive website adapts to mobile phones, tablets, laptops, and desktops. CSS Grid, Flexbox, responsive images, and Tailwind CSS breakpoints help create a consistent experience across devices.",
      content:
        "Responsive design helps websites remain readable and usable on different screens. Start with a mobile-friendly layout, use flexible widths, and add breakpoints when the content needs them. Test navigation, buttons, images, typography, and forms on small screens. Tailwind CSS utilities such as sm:, md:, lg:, and xl: can help manage responsive layouts.",
      src: projectFour,
    },
    {
      id: 4,
      title: "Java and Database Connectivity",
      category: "Java Development",
      excerpt:
        "Understand the basics of JDBC and how Java applications communicate with relational databases.",
      decs:
        "JDBC provides Java applications with a standard way to connect to databases, execute SQL queries, and process results. It is an important foundation for backend development.",
      content:
        "JDBC stands for Java Database Connectivity. The typical workflow includes obtaining a database connection, creating a PreparedStatement, executing a query or update, processing the ResultSet when needed, and closing resources. PreparedStatement helps protect against SQL injection when used correctly. Later, you can explore Hibernate and Spring Data JPA to simplify database operations.",
      src: projectfive,
    },
    {
      id: 5,
      title: "Creating a Personal Portfolio",
      category: "Projects & Career",
      excerpt:
        "Learn what to include in a portfolio that presents your projects, technical skills, and experience.",
      decs:
        "A portfolio helps developers showcase practical work beyond a resume. Clear project descriptions, live demos, source code, and responsive design make it easier for recruiters to understand your skills.",
      content:
        "A useful developer portfolio includes a short introduction, technical skills, selected projects, education, experience, and contact information. For every project, explain the problem, technologies used, important features, and your contribution. Add working demo and GitHub links where available, and keep the design accessible and mobile-friendly.",
      src: Projectseven,
    },
    {
      id: 6,
      title: "Improving Problem-Solving with DSA",
      category: "Programming",
      excerpt:
        "Build stronger programming fundamentals through arrays, strings, searching, sorting, and data structures.",
      decs:
        "Data structures and algorithms help developers think about correctness, efficiency, and trade-offs. Regular practice with small problems can improve coding confidence and interview preparation.",
      content:
        "Start with arrays, strings, hash maps, linked lists, stacks, and queues. Learn to estimate time and space complexity using Big O notation. Practice problems such as Two Sum, Binary Search, Merge Two Sorted Lists, and Longest Substring Without Repeating Characters. Focus on explaining your approach and testing edge cases rather than memorizing solutions.",
      src: projecteight || Projectseven,
    },
  ];

  if (selectedPost !== null) {
    const post = posts.find((item) => item.id === selectedPost);

    if (post) {
      return (
        <BlogPost
          post={post}
          onBack={() => setSelectedPost(null)}
        />
      );
    }
  }

  return (
    <section
      id="blog"
      className="w-full py-20 border-b border-emerald-200 dark:border-[#26372F] transition-colors duration-300"
    >
      {/* Heading */}
      <div className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[4px] text-emerald-600 dark:text-emerald-400">
          Knowledge & Insights
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 dark:text-gray-100">
          My Blog
        </h2>

        <p className="max-w-2xl mt-4 text-gray-600 dark:text-gray-400 leading-7">
          Articles and notes about web development, Java, React,
          full-stack projects, and problem-solving.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-[#26372F] dark:bg-[#111820] dark:hover:border-emerald-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[16/10] bg-[#E8F1EA] dark:bg-[#17251F]">
              <img
                src={post.src}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <h3 className="text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 dark:text-gray-100 dark:group-hover:text-emerald-400">
                {post.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400 line-clamp-3">
                {post.decs}
              </p>

              <button
                type="button"
                onClick={() => setSelectedPost(post.id)}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-emerald-700 transition-all hover:gap-3 dark:text-emerald-400"
                aria-label={`Read more about ${post.title}`}
              >
                Read Article
                <MdOutlineArrowOutward className="text-xl" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
