import react, { useState } from "react";
const Home = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <section>
                <div className="w-full relative px-6 xl:px-0">
                    <img className="absolute w-full inset-0 h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" />
                    <nav className="lg:hidden relative z-40">
                        <div className="flex py-6 justify-between items-center px-4">
                            <div>
                                <img className="w-24" src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" />
                            </div>
                            <div className="flex items-center">
                                <ul className={menu ? "top-100 top-0 p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-16 md:mt-16" : "hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16"}>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Products</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Claims</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Renewals</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center">
                                        <a href="#">
                                            <span className="ml-2 font-bold">Reports</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="xl:hidden">
                                    <svg id="open" onClick={() => setMenu(true)} aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                    <div id="close" className="hidden close-m-menu" onClick={() => setMenu(false)}>
                                        <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav className="hidden relative z-10 w-full lg:flex justify-between items-center px-6 pt-6">
                        <div className="w-1/6">
                            <a href="#">
                                <img src="https://cdn.tuk.dev/assets/templates/weCare/logo-blue.png" />
                            </a>
                        </div>
                        <div className="w-5/6">
                            <div className="flex items-center justify-end">
                                <ul className="text-gray-800 flex items-center leading-none">
                                    <li>
                                        <a href="#">Latest Books</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">Authors</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">Services</a>
                                    </li>
                                    <li className="ml-4">
                                        <a href="#">About Us</a>
                                    </li>
                                </ul>
                                <div className="pl-40">
                                    <button className="bg-indigo-500 text-white px-6 py-2.5 font-semibold rounded focus:outline-none">Login</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="lg:flex items-center relative z-10 container mx-auto">
                        <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                            <img className="mx-auto" src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/home/2021_cm_web_homepage_hero-stackofemails.png?ver=300" />
                        </div>
                        <div className="w-full lg:w-1/2 h-full">
                            {/* Custome title Starts  */}

                            <h1 className="mx-auto  max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                                Buying Books{' '}
                                <span className="relative whitespace-nowrap text-blue-600">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 418 42"
                                        className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                                        preserveAspectRatio="none"
                                    >
                                        <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                                    </svg>
                                    <span className="relative">made simple</span>
                                </span>{' '}
                                for everyone online!
                            </h1>
                            {/* Custom title ends */}
                            <div className="bg-white py-4 px-4 flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center shadow-lg rounded-lg">
                                <div className="sm:flex items-center py-2">
                                    <div className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 icon icon-tabler icon-tabler-user" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <p className="leading-none tracking-normal text-gray-800 ml-2.5">Best Authors</p>
                                    </div>
                                    <div className="flex items-center sm:mx-4 xl:mx-14 my-6 lg:my-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-indigo-500 icon icon-tabler icon-tabler-layout-bottombar" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <rect x={4} y={4} width={16} height={16} rx={2} />
                                            <line x1={4} y1={15} x2={20} y2={15} />
                                        </svg>
                                        <p className="leading-none tracking-normal text-gray-800 ml-2.5">Best Sellers</p>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            x="0"
                                            y="0"
                                            viewBox="0 0 256 256"
                                        >
                                            <path
                                                fill="#6366f1"
                                                strokeMiterlimit="10"
                                                d="M3 1a1.001 1.001 0 00-.852 1.523L9.973 15.26c-1.84 1.654-3.006 4.044-3.006 6.707C6.967 26.947 11.02 31 16 31c4.98 0 9.033-4.053 9.033-9.033a9.002 9.002 0 00-3.004-6.707l7.823-12.737A.998.998 0 0029 1h-7.965a.997.997 0 00-.9.566l-4.168 8.682-4.098-8.674A1 1 0 0010.965 1zm1.787 2h5.545l4.715 9.984c-.086.01-.169.03-.254.041-.213.029-.427.057-.635.1-.089.019-.175.047-.263.068-.204.05-.408.096-.606.159-.073.023-.144.054-.217.08-.22.075-.437.152-.648.244l-.047.021a9.028 9.028 0 00-.78.389zm16.877 0h5.549L20.4 14.086a9.032 9.032 0 00-1.445-.645c-.017-.005-.032-.013-.049-.02l-.017-.005a8.944 8.944 0 00-.674-.195c-.049-.013-.098-.026-.147-.037a8.973 8.973 0 00-.65-.127c-.035-.006-.069-.015-.104-.02l-.218-.523zm-5.738 11.943a6.984 6.984 0 012.465.42l.07.026a6.99 6.99 0 011.648.882 7.02 7.02 0 012.924 5.696A7.041 7.041 0 0116 29a7.041 7.041 0 01-7.033-7.033 7.022 7.022 0 013.412-6.018l.027-.015c.169-.1.34-.194.516-.28l.043-.021a7.09 7.09 0 012.96-.69zM16 18.967a3 3 0 100 6 3 3 0 000-6z"
                                                fontFamily="none"
                                                fontSize="none"
                                                fontWeight="none"
                                                textAnchor="none"
                                                transform="scale(8)"
                                            ></path>
                                        </svg>
                                        <p className="leading-none tracking-normal text-gray-800 ml-2.5">Award Winners</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>
                {`
            /* Top menu */
            .top-100 {
                animation: slideDown 0.5s ease-in-out;
            }
            @keyframes slideDown {
                0% {
                    top: -50%;
                }
                100% {
                    top: 0;
                }
            }
            * {
                outline: none !important;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                -webkit-tap-highlight-color: transparent;
            }`}
            </style>
        </div>
    );
};
export default Home;
