import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = ({ cat, search }) => {
  const [Data, setData] = useState(null);
  const [Page, setPage] = useState(1);
  const [query, setQuery] = useState(search); // Use state to store the search query
  const category = cat.toUpperCase();

  const PageHandlerNext = () => {
    if (Page < 5) {
      setPage(Page + 1);
    } else {
      alert("No next Page");
    }
  };

  const PageHandlerPrev = () => {
    if (Page > 1) {
      setPage(Page - 1);
    } else {
      alert("No prev Pages");
    }
  };

  const fetchData = async () => {
    try {
      const baseUrl = "https://newsapi.org/v2";
      let url;
      if (search) {
        url = `${baseUrl}/everything?q=${search.toLowerCase()}&page=${Page}&sortBy=publishedAt&apiKey=31c910833f5949f6b0fe1f8241c091b2`;
      } else {
        url = `${baseUrl}/top-headlines?country=in&category=${cat}&page=${Page}&apiKey=31c910833f5949f6b0fe1f8241c091b2`;
      }
      const res = await axios.get(url);
      setData(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
  }, [cat, search]);

  useEffect(() => {
    setQuery(search);
  }, [query, cat, search]);

  useEffect(() => {
    fetchData();
    console.log(query);
  }, [cat, search, Page]);

  return (
    <div className="grid bg-green-100 items-center min-h-[567px] overflow-auto scrollbar-hide justify-center border p-5 ">
      <h1 className="text-4xl font-bold flex items-center m-auto p-5 ">
        {query ? `  Search results for ${query.toUpperCase()}` : `${category}`}
      </h1>

      {Data
        ? Data.slice(Page * 4 - 4, Page * 4).map((items, index) => {
            return (
              <div className="grid  grid-cols-1 justiṭfy-center hover:shadow items-center  gap-5 p-3 my-2">
                {/* <Card details={items}/> */}
                <div>
                  <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <img
                      className="object-cover w-full h-64"
                      src={items.urlToImage}
                      alt="Article Image"
                    />

                    <div className="p-6">
                      <div>
                        <a
                          href="#"
                          className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                          tabIndex="0"
                          role="link"
                        >
                          {items.title}
                        </a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {items.content}
                        </p>
                        <a
                          href={items.url}
                          target="blank"
                          className="text-white  mt-3"
                        >
                          {" "}
                          <button className="bg-blue-500 p-2 my-2">
                            {" "}
                            View More{" "}
                          </button>{" "}
                        </a>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-start gap-0 ">
                          <div className="flex items-center text-white">
                            {/* <img className="object-cover h-10 rounded-full" src={items.url} alt="Avatar" /> */}
                            <a
                              href="#"
                              className="mx-0 font-semibold text-gray-700 dark:text-gray-200"
                              tabIndex="0"
                              role="link"
                            >
                              {items.source.name}
                            </a>
                          </div>
                          <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                            {items.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "Loading the news, wait for a moment ..."}
      <div className="flex  items-center justify-center ">
        <nav aria-label="Page navigation example border border-red-500 flex items-center">
          <ul className="inline-flex items-center -space-x-px overflow-hidden">
            <li>
              <a
                href="#"
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  onClick={() => PageHandlerPrev()}
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              {Page === 1 ? (
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => setPage(1)}
                >
                  1
                </a>
              ) : (
                <a
                  href="#"
                  className="px-3 p-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPage(1)}
                >
                  1
                </a>
              )}
            </li>
            <li>
              {Page === 2 ? (
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => setPage(2)}
                >
                  2
                </a>
              ) : (
                <a
                  href="#"
                  className="px-3 p-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPage(2)}
                >
                  2
                </a>
              )}
            </li>
            <li>
              {Page === 3 ? (
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => setPage(3)}
                >
                  3
                </a>
              ) : (
                <a
                  href="#"
                  className="px-3 p-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPage(3)}
                >
                  3
                </a>
              )}
            </li>
            <li>
              {Page === 4 ? (
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => setPage(4)}
                >
                  4
                </a>
              ) : (
                <a
                  href="#"
                  className="px-3 p-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPage(4)}
                >
                  4
                </a>
              )}
            </li>
            <li>
              {Page === 5 ? (
                <a
                  href="#"
                  className="px-3 py-2 leading-tight text-blue-600 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  onClick={() => setPage(5)}
                >
                  5
                </a>
              ) : (
                <a
                  href="#"
                  className="px-3 p-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => setPage(5)}
                >
                  5
                </a>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  onClick={() => PageHandlerNext()}
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FetchData;
