import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
       
          
    <div className="flex justify-evenly">
   <div className="flex gap-20 my-8 text-[20px]"> 

    <p className="text-yellow-600 italic mr-80 font-bold">FoodHouse</p>

  </div>


        <div className="flex gap-20 my-8 text-[20px]">
        <p className="text-yellow-600">HOME</p>
        <p>RESTRURNT</p>
        <p>SERVICS</p>
        <p>CART</p>
        </div>
        <div>
        <p className="my-8 text-[20px]">Sign Up</p>
      </div>
      </div>
      <div className=" px-28 py-28 flex justify-evenly">
        <div>
        <h1 className=" text-7xl font-black ">Enjoy Delicious <br /> Food in <b className="text-yellow-600">Healthy Life</b></h1> <br /><br />
        <p className="">Tandoori masala is an Indian spice blend consisting of a <br/>variety of spice Tandoori masala in an indian spice blend <br/>consisting of a variety of spices </p>
        <button className="my-[70px] bg-yellow-500 --text-neutral-100 min-w-[200px] text-amber-500 min-h-[65px] text-[25px] rounded-lg mr-[60px]">Order Now</button>
        </div>
        <div>
          <img src="/Images/dish.png" alt="Fried Chicken" className="size- 24 " />
        </div>
    </div>



    <section className="pt-[50px]">
        <p className="font-bold text-center text-6xl font-serif">Online Store</p>
        <p className="font-bold text-center text-6xl">Popular Foods</p>
        <div className="flex justify-around gap-10 pt-[50px]">
          <figure>
            <img className="h-[200px]  w-[200px] rounded-full" src="/Images/Screenshot from 2024-07-24 09-03-54.png" alt="Pilipili" />
            <figcaption>
              <p className="text-center text-4xl"><b>Frut Dish</b></p>
              <p className="text-center">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-4 px-6 rounded-full flex gap-[10px] w-[220px] h-[60px]">
                <span>Add to Cart</span>
                <br></br>
                <span>$696</span>
              </button>
            </figcaption>
          </figure>
          <figure>
            <img className="h-[200px]  w-[200px] rounded-full" src="/Images/Screenshot from 2024-07-24 09-04-16.png" alt="Pilipili" />
            <figcaption>
              <p className="text-center text-4xl"><b>Frut Dish</b></p>
              <p className="text-center">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-4 px-6 rounded-full flex gap-[10px] w-[220px] h-[60px]">
                <span>Add to Cart</span>
                <br></br>
                <span>$696</span>
              </button>
            </figcaption>
          </figure>
          <figure>
            <img className="h-[200px]  w-[200px]  rounded-full" src="/Images/Screenshot from 2024-07-24 09-05-44.png" alt="Pilipili" />
            <figcaption>
              <p className="text-center text-4xl"><b>Frut Dish</b></p>
              <p className="text-center">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-4 px-6 rounded-full flex gap-[10px] w-[220px] h-[60px]">
                <span>Add to Cart</span>
                <br></br>
                <span>$696</span>
              </button>
            </figcaption>
          </figure>
          <figure>
            <img className="h-[200px]  w-[200px]  rounded-full" src="/Images/Screenshot from 2024-07-24 09-03-54.png" alt="Pilipili" />
            <figcaption>
              <p className="text-center text-4xl"><b>Frut Dish</b></p>
              <p className="text-center">Dinko Food</p>
              <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-4 px-6 rounded-full flex gap-[10px] w-[220px] h-[60px]">
                <span>Add to Cart</span>
                <br></br>
                <span>$696</span>
              </button>
            </figcaption>
          </figure>
        </div>
      </section>



      <section className="pt-[80px] flex justify-center justify-around">
        <div className="mt-[50px]">
          <h1 className="font-bold text-6xl">Our Special Offer</h1>
          <br></br>
          <br></br>
          <p className="text-left w-[400px]">Best cooks and best delivery guys all at your service.
            Host tasty food will reach you in 60 minutes.
          </p>
          <br></br>
          <br></br>
          <button className="bg-yellow-500 hover:blue-700 text-white font-bold py-2 px-4 rounded-lg gap-[5px] flex h-[50px]">
            <span>
              See All Menu
            </span>
            <span>
              <img className="w-[28px] h-[28px] mb-[50px]" src="/Images/icons8-arrow-50.png" alt="arrow" />
            </span>
          </button>
        </div>
        <div>
          <img className="w-[370px] h-[340px] object-fit" src="/Images/Screenshot from 2024-07-24 09-57-03.png" alt="A plate of food" />
        </div>
      </section>



      <section className="pt-[80px]">
        <p className="text-center">Quality Food</p>
        <h1 className="text-center font-bold text-4xl">Get The Best Offers </h1>
        <p className="w-[29%] text-center ml-[36%]">The food at your doorstep. Why starve when you have us.
          Your hunger partner. Straight out of the oven to your doorstep.
        </p>
        <div className="flex justify-evenly pt-[50px]">
          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold">Any day Offers</h5>
              <p className="w-[200px] leading-loose pt-[20px]">New pheneomenon Burger taste</p>
              <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p>
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full" src="/Images/kebab.png" alt="Dish" />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold">Other Flavours</h5>
              <p className="w-[200px] leading-loose pt-[20px]">Save room.We made salats</p>
              <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p>
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full font-semibold" src="/Images/kebab.png" alt="Dish" />
            </div>
          </div>
          <div className="flex gap-[10px]">
            <div>
              <h5 className="text-3xl font-bold">Any day Offers</h5>
              <p className="w-[200px] leading-loose pt-[20px]">Find a poco store near you</p>
              <p className="pt-[30px] text-yellow-500 font-bold">$12.90</p>
            </div>
            <div>
              <img className="h-[200px]  w-[200px]  rounded-full"src="/Images/location.jpeg" alt="Dish" />
            </div>
          </div>
        </div>
      </section>




      <section>
        <h1 className="text-center text-5xl font-bold pt-[80px]">Our Services</h1>
        <div className="flex justify-evenly pt-[50px]">
          <figure>
            <img src="/Images/Screenshot from 2024-07-24 09-10-17.png" alt="House" />
          </figure>
          <figure>
            <img src="/Images/Screenshot from 2024-07-24 09-10-06.png" alt="Good Quality" />
          </figure>
          <figure>
            <img src="/Images/Screenshot from 2024-07-24 09-17-32.png" alt="Discount System" className="mb-5"/>
          </figure>
          <figure>
            <img src="/Images/Screenshot from 2024-07-24 09-16-34.png" alt="Fast Delivery" className="mb-5"/>
          </figure>
        </div>
      </section>


      <div className="text-center ">
          <h2 className="text-3xl ">Testimonial</h2>
          <h1 className=" text-6xl font-black ">What Our Clients Say</h1> <br /><br />
          <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidunt <br />ut labore magna aliqua. Ut enim ad minin veniam, quis nostrud exercitation <br />ullamco laboris nisi ut aliquip ex ea commodo</p> <br /><br />
          <img src="/Images/teamgroup.png" alt="" className="team ml-72" />
        </div>

2



    <footer className="bg-black text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
              <p className="mb-4">
                Best cooks and best delivery guys all at your service. Hot tasty
                food will reach you in 60 minutes.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-white p-2 rounded-full">
                  <img
                    src="/facebook-icon.png"
                    width={24}
                    height={24}
                    alt="Facebook"
                  />
                </Link>
                <Link
                  href=""
                  className="bg-white p-2 rounded-full"
                >
                  <img
                    src="/twitter-icon.png"
                    width={24}
                    height={24}
                    alt="Twitter"
                  />
                </Link>
                <Link
                  href=""
                  className="bg-white p-2 rounded-full"
                >
                  <img
                    src="/linkedin-icon.png"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Career
                  </span>
                </li>
                <li>
                  About{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Blog
                  </span>
                </li>
                <li>
                  Press{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Features
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Fudo</h3>
              <ul className="space-y-2">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Fudo
                  </span>
                </li>
                <li>
                  How it works{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Why Choose Us
                  </span>
                </li>
                <li>
                  Client side{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Gallery
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Breakfast
                  </span>
                </li>
                <li>
                  Lunch{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Us
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Dinner
                  </span>
                </li>
                <li>
                  Fast Foods{" "}
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Info
                  </span>
                </li>
                <li>
                  <span className="hover:text-yellow-400 cursor-pointer transition-colors duration-300">
                    Drinks
                  </span>
                </li>
              </ul>
            </div>
            <div className="mt-129 pt-2 border-t border-gray-10000 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400">
                Copyright 2021 Besnik All Right Reserved
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
