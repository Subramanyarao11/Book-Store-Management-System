export default function Example() {
    return (
        <>
            <div id="publishers" className="mx-auto pt-4 max-w-2xl text-center">
                <h2
                    id="testimonials-title"
                    className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                >
                    Loved by
                    <span className="font-semibold  animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"> publishers</span> worldwide.
                </h2>
            </div>

            {/* Logos */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="https://arihantbooks.com/assets/images/logo.svg" alt="Arihant" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="https://logos-download.com/wp-content/uploads/2016/06/Pearson_logo.png" alt="Pearson" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img className="h-12" src="https://www.wiley.com/content/dam/wiley-dotcom/en/b2c/images/company-logo/wiley-logo-black.svg" alt="Wiley" />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://www.hachette.com/wp-content/themes/hachette_2020_01bkp/library/img/logo_hachette.png"
                                alt="Hachette"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://global.oup.com/system/images/oup-logo-blue.svg"
                                alt="Workcation"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
