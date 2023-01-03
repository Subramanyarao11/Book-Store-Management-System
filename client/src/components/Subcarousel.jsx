import React from 'react'
import book4 from '../assets/Books/book4.jpg';
import book5 from '../assets/Books/book5.jpg';
import book6 from '../assets/Books/book6.jpg';
import book7 from '../assets/Books/book7.jpg';

export default function () {
    return (
        <>

            <div className="container px-4 mx-auto">
                <div className="max-w-sm md:max-w-2xl xl:max-w-6xl mx-auto">
                    <div className="flex flex-wrap -mx-4 -mb-8">
                        <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="relative h-72 mb-3">
                                <div className="absolute top-0 left-0 w-full h-full bg-blueGray-900 rounded-md"></div>
                                <img className="img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md" src={book4} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="relative h-72 mb-3">
                                <div className="absolute top-0 left-0 w-full h-full bg-blueGray-900 rounded-md"></div>
                                <img className="img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md" src={book5} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="relative h-72 mb-3">
                                <div className="absolute top-0 left-0 w-full h-full bg-blueGray-900 rounded-md"></div>
                                <img className="img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md" src={book6} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
                            <div className="relative h-72 mb-3">
                                <div className="absolute top-0 left-0 w-full h-full bg-blueGray-900 rounded-md"></div>
                                <img className="img-fluid transform -translate-x-1 -translate-y-1 h-full w-full mb-3 border-2 border-black rounded-md" src={book7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
