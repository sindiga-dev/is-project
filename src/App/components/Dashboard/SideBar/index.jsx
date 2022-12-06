import { Link } from "react-router-dom";
function SideBar() {
  return (
    <aside className="w-80 sticky hidden sm:block" aria-label="Sidebar">
      <div class="overflow-y-auto py-auto  px-3 bg-blue-400  dark:bg-gray-800 h-screen rounded-md">
        <ul class="space-y-2">
          <li>
            <Link className="flex items-center py-4 px-1">
              <img
                src="https://thumbs.dreamstime.com/b/continuous-one-line-drawing-front-view-bus-stopped-bus-stop-waiting-passengers-to-get-off-then-223157349.jpg"
                alt="logo"
                className="w-20 mt-0 rounded-full"
              />
              <span className="font-semibold text-white text-lg">TRAVELA</span>
            </Link>

            <Link
              to=""
              className="flex items-center p-2 text-base font-2xl  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-white hover:text-black">
              <svg
                aria-hidden="true"
                className="w-6 h-6  text-white hover:text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/bookings"
              className="flex items-center p-2 text-base font-2xl rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  text-white hover:text-black">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white hover:text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">View Bookings</span>
              <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium  bg-gray-200 rounded-full dark:bg-gray-700 text-white hover:text-black"></span>
            </Link>
          </li>
          <li>
            <Link
              to="book"
              className="flex items-center p-2 text-base font-2xl rounded-lg dark:text-white hover:bg-gray-100  text-white hover:text-black">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white hover:text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap"> Book a trip</span>
              <span className="inline-flex justify-center items-center p-5 ml-3 w-3 h-3 text-sm font-medium text-white bg-cyan-900 rounded-full dark:bg-black dark:text-blue-200">
                Book
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              className="flex items-center p-2 text-base font-2xl rounded-lg dark:text-white hover:bg-gray-100 text-white hover:text-black">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white hover:text-black transition duration-75  group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">User Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center p-2 text-base font-2xl  rounded-lg dark:text-white hover:bg-gray-100 text-white hover:text-black">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-white hover:text-black transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </Link>
          </li>
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              to=""
              className="flex items-center p-2 text-base font-2xl text-white hover:text-blacktext-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-5 h-5 text-white transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white dark:text-gray-400"
                focusable="false"
                data-prefix="fas"
                data-icon="gem"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"></path>
              </svg>
              <span className="ml-4">About Travela</span>
            </Link>
          </li>

          <li>
            <Link
              to=""
              className="flex items-center p-2 text-base font-2xl text-white hover:text-blacktext-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"></path>
              </svg>
              <span className="ml-3">Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
export default SideBar