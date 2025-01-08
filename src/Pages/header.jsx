import Navbar from "../componenets/navbar";

function Header(){
    return <> <Navbar/>
    <div className="py-16 bg-white">
    <div  className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
        <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
            <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                <h1 className="text-4xl text-gray-700 font-bold md:text-5xl">Buy now and benefit up to <span className="text-blue-500">30% off</span></h1>
                <p className="text-lg">Be part of millions people around the world using tailus in modern User Interfaces.</p>
                <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                    <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                        <span className="block text-white font-semibold">
                            Start buying
                        </span>
                    </button>
                    <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                        <span className="block text-gray-600 font-semibold">
                            More about
                        </span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                <div className="col-span-2 row-span-4">
                    <img src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/26257134/2024/3/27/f8644fb7-816c-4036-b13c-c4edc73f362c1711539349242-Red-Tape-Women-Mesh-Walking-Shoes-4961711539348840-1.jpg" className="rounded-full" width="640" height="960" alt="shoes" loading="lazy"/>
                </div>
                <div className="col-span-2 row-span-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-tmLo0avJYgEK-brljMI05owD3uQrgB5tQ&s" className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy"/>
                </div>
                <div className="col-span-3 row-span-3">
                    <img src="src/assets/image2.webp" className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy"/>
                </div>
            </div>
        </div>
    </div>
</div></>
}
export default Header;