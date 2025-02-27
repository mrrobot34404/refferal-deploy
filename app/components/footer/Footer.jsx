import React from 'react'

const Footer = () => {
  return (
    <section className="pt-24 pb-14">
  <div className="container mx-auto px-4">
    <div className="flex items-start justify-between flex-wrap gap-8 mb-40">
      <a href="#">
        <img src="https://static.shuffle.dev/components/preview/c6283f8f-6793-47ac-b2f0-908cc21b4d11/assets/public/saturn-assets/logos/logo-saturn-dark.svg" alt="" />
      </a>
      <div className="flex flex-wrap gap-4 -mx-4">
        <ul className="flex flex-col gap-6 p-4">
          <li className="text-black font-medium">Platform</li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Features</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">How it works</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Pricing</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Events</a></li>
        </ul>
        <ul className="flex flex-col gap-6 p-4">
          <li className="text-black font-medium">Platform</li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">About</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Our Mission</a></li>
          <li className="flex items-center flex-wrap gap-2">
            <a className="text-gray-500 hover:text-black transition duration-200" href="#">Careers</a>
            <div className="bg-orange-500 py-1 px-2 rounded-md text-white text-xs font-bold font-heading uppercase">HIRING</div>
          </li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Contact</a></li>
        </ul>
        <ul className="flex flex-col gap-6 p-4">
          <li className="text-black font-medium">Platform</li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Tutorials</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Blog</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Help Center</a></li>
          <li><a className="text-gray-500 hover:text-black transition duration-200" href="#">Support</a></li>
        </ul>
      </div>
      <ul className="flex flex-col gap-6 p-4">
        <li className="flex items-center gap-4 flex-wrap">
          <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="white"></path>
            </svg>
          </div>
          <a className="hover:text-opacity-70 text-sm font-medium transition duration-200" href="#">Follow us on Twitter</a>
        </li>
        <li className="flex items-center gap-4 flex-wrap">
          <div className="bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z" fill="white"></path>
            </svg>
          </div>
          <a className="hover:text-opacity-70 text-sm font-medium transition duration-200" href="#">Follow us on Instagram</a>
        </li>
        <li className="flex items-center gap-4 flex-wrap">
          <div className="bg-orange-50 rounded-full w-12 h-12 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#530031"></path>
            </svg>
          </div>
          <a className="hover:text-opacity-70 text-sm font-medium transition duration-200" href="#">Follow us on LinkedIn</a>
        </li>
      </ul>
    </div>
    <p className="text-gray-500 text-sm text-right">© 2024 Bloga. All rights reserved.</p>
  </div>
</section>
  )
}

export default Footer