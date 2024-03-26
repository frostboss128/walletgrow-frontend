import React from "react";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";
import Lottie from "react-lottie";
import investment from "../../animation/garranty.json";
import monitoring from "../../animation/web-and-mobile-applications.json";
import insurance from "../../animation/security.json";
import convenient from "../../animation/fast-exchange.json";
import secure from "../../animation/always-close-by.json";
import stable from "../../animation/fixed-income.json";
import Timeline2023 from "./Timeline2023.jsx";
import Timeline2024 from "./Timeline2024.jsx";
import Timeline2025 from "./Timeline2025.jsx";
import Timeline2026 from "./Timeline2026.jsx";
import Timeline2027 from "./Timeline2027.jsx";

const Home = () => {
  return (
    <div className="space-y-20">
      <div></div>

      <div className="text-center px-6 text-gray-700 space-y-6">
        <div className="text-4xl font-bold text-sky-400">
          <span className="border border-sky-400 px-4 py-2 relative">
            <b className="absolute opacity-50 top-0 left-0 right-0 before:contents-[''] before:w-4 before:h-4 before:absolute before:border-l-4 before:border-t-4 before:border-sky-400 before:left-0 after:contents-[''] after:w-4 after:h-4 after:absolute after:border-r-4 after:border-t-4 after:border-sky-400 after:right-0"></b>
            <b>WalletGrow</b>
            <b className="absolute opacity-50 bottom-0 left-0 right-0 before:contents-[''] before:w-4 before:h-4 before:absolute before:border-l-4 before:border-b-4 before:border-sky-400 before:left-0 before:bottom-0 after:contents-[''] after:w-4 after:h-4 after:absolute after:border-r-4 after:border-b-4 after:border-sky-400 after:right-0 after:bottom-0"></b>
          </span>
        </div>
        <p className="font-semibold">
          We are a team of specialists in various fields of crypto world. We have united the most popular sectors in a
          single platform, which will become a gateway to the world of technology and finance.
        </p>
        <div className="grid place-items-center">
          <img src="/images/home/working.gif" loading="lazy" alt="working.gif" width={"100%"} className="max-w-96" />
        </div>
      </div>

      <div className="space-y-4">
        <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2000 })]} className="w-full px-6">
          <CarouselContent>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img src="/images/home/ads/01.svg" loading="lazy" alt="01" width={"100%"} />
                  </CardContent>
                  <CardFooter className="flex-col text-sm space-y-2 w-full p-2">
                    <div className="text-center">
                      <p className="text-xl font-bold">X-Wallet</p>
                      <p className="">20$ - 10,000$</p>
                    </div>
                    <p className="bg-green-500 text-white rounded-xl px-2 py-1">1.0% ~ 2.3%</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img src="/images/home/ads/02.svg" loading="lazy" alt="02" width={"100%"} />
                  </CardContent>
                  <CardFooter className="flex-col text-sm space-y-2 w-full p-2">
                    <div className="text-center">
                      <p className="text-xl font-bold">Xedmex</p>
                      <p className="">From 10$</p>
                    </div>
                    <p className="bg-green-500 text-white rounded-xl px-2 py-1">1.2% ~ 5.0%</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img src="/images/home/ads/03.svg" loading="lazy" alt="03" width={"100%"} />
                  </CardContent>
                  <CardFooter className="flex-col text-sm space-y-2 w-full p-2">
                    <div className="text-center">
                      <p className="text-base min-[380px]:text-xl font-bold">Global Basket</p>
                      <p className="">From 60$</p>
                    </div>
                    <p className="bg-green-500 text-white rounded-xl px-2 py-1">Upto 2%</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/4">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <img src="/images/home/ads/04.svg" loading="lazy" alt="04" width={"100%"} />
                  </CardContent>
                  <CardFooter className="flex-col text-sm space-y-2 w-full p-2">
                    <div className="text-center">
                      <p className="text-base min-[380px]:text-xl font-bold">Cen-Trium</p>
                      <p className="">From 50$</p>
                    </div>
                    <p className="bg-green-500 text-white rounded-xl px-2 py-1">2.2% ~ 2.8%</p>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className="text-center px-6 text-gray-700 font-semibold">
        <div>
          <h1 className="text-4xl font-bold">
            Our <span className="text-sky-400">Advantages</span>
          </h1>
          <p>
            Our goal is to make cryptocurrencies easier and more accessible for everyone, so that everyone can earn
            money on the most promising and fast-growing crypto currency market. We create products that are necessary
            and useful to people, taking care of our users
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-16 sm:gap-y-8 px-4 sm:px-10">
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: investment,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Investment opportunities</h4>
            <p className="text-left">
              User, who are scared about working on crypto projects, trading, NFT and who don't have time to analysis
              and invest in crypto, They simply can invest with us. Our company will take over risk management and Time
              management with users funds. We are providing offers as fixed, flexible and savings.
            </p>
          </div>
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: monitoring,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Project Monitoring</h4>
            <p className="text-left">
              For your convenience, we have created a modern website. Our goal is to provide our customers with great
              earning opportunities and convenience and ease of use. Anyone can use our platform, regardless of
              knowledge, education, and experience. Our special teams are analyzing everyday about latest crypto earning
              programs for our customers. Simply come , check out the project details and read reviews and start your
              earnings
            </p>
          </div>
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: insurance,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Insurance policy</h4>
            <p className="text-left">
              For your financial stability, we have implemented an insurance policy for our users. According to our
              company rules and regulations, currently users can claim cash refund upto 50% for failure and scam
              projects. Insurance policy for a safety precautions and stresslees work.
            </p>
          </div>
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: convenient,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Convenient website</h4>
            <p className="text-left">
              We are the only most most innovative and reliable crypto Earning program in the world. We implemented lot
              of technical strategies and financial stability for our users to work for long term. Our service is always
              available for everyone, from anywhere in the world, so that you receive a stable income and be confident
              in the future.
            </p>
          </div>
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: secure,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Safe and Secure</h4>
            <p className="text-left">
              The safety and security of our investors funds, as well as their personal data, is our main task. A
              professional team of traders, analysts and cybersecurity specialists allows to be confident of success. We
              guarantee stable profits.
            </p>
          </div>
          <div className="space-y-2">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: stable,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
              }}
              width={200}
              height={200}
            />
            <h4 className="font-bold text-left text-2xl">Stable income</h4>
            <p className="text-left">
              We never stand still and carefully study modern technologies and the opportunities they open up. By
              combining 4 areas on one platform, we increase the income of our users.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center px-6 text-gray-700 font-semibold space-y-8">
        <div className="space-y-6">
          <h3 className="text-5xl font-bold">
            <span>How it</span>
            &nbsp;
            <span className="text-sky-400">works</span>
          </h3>
          <p>
            We have created a unified ecosystem consisting of 4 sources of income for company and users:&nbsp;
            <span className="text-sky-400">Monitoring</span>, <span className="text-sky-400">Insurance</span>,
            <span className="text-sky-400">Investment</span>, and <span className="text-sky-400">Entertainment</span> -
            which provide constant development of the company and stable earnings. Company will distributes benefits and
            income to users all over the world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-8 px-4 sm:px-10">
          <div className="flex flex-row shadow-md shadow-gray-400 items-center p-4 gap-x-6 rounded-md">
            <img src="/images/home/howto/Investment.svg" loading="lazy" alt="investment" width={70} height={70} />
            <div className="col-span-4 text-left space-y-2">
              <h6 className="font-bold">Investment</h6>
              <p className="text-sm">
                We developed a passive income system to all crypto investors in the world. Simply invest and earn with
                X-wallet.
              </p>
            </div>
          </div>
          <div className="flex flex-row shadow-md shadow-gray-400 items-center p-4 gap-x-6 rounded-md">
            <img src="/images/home/howto/Monitoring.svg" loading="lazy" alt="Monitoring" width={70} height={70} />
            <div className="col-span-4 text-left space-y-2">
              <h6 className="font-bold">Monitoring</h6>
              <p className="text-sm">
                Our project hunting teams update everyday latest earnings opportunities and platforms to the investors.
              </p>
            </div>
          </div>
          <div className="flex flex-row shadow-md shadow-gray-400 items-center p-4 gap-x-6 rounded-md">
            <img src="/images/home/howto/Insurance.svg" loading="lazy" alt="Insurance" width={70} height={70} />
            <div className="col-span-4 text-left space-y-2">
              <h6 className="font-bold">Insurance</h6>
              <p className="text-sm">
                The insurance system will help the investors to recover fund losses from scam projects.
              </p>
            </div>
          </div>
          <div className="flex flex-row shadow-md shadow-gray-400 items-center p-4 gap-x-6 rounded-md">
            <img src="/images/home/howto/Entertainment.svg" loading="lazy" alt="Entertainment" width={70} height={70} />
            <div className="col-span-4 text-left space-y-2">
              <h6 className="font-bold">Entertainment</h6>
              <p className="text-sm">Soon (Play and Earn)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-6 text-gray-700 font-semibold grid grid-cols-1 sm:grid-cols-2 place-items-center sm:gap-8">
        <div>
          <img src="/images/home/mindmap.png" loading="lazy" alt="mindmap" width={"100%"} />
        </div>
        <div className="text-left space-y-2">
          <div className="space-y-4 font-bold">
            <h3 className="text-5xl">Your Assets</h3>
            <p className="text-2xl">Secured and Anonymous</p>
          </div>
          <div>
            The <span className="text-sky-400 font-bold">WalletGrow</span> is absolutely centralized system - we ensure
            full safety of your funds. If you're looking for the best CEX based investment standards, WalletGrow is what
            you need.
          </div>
          <img src="/images/home/phone.svg" loading="lazy" alt="phone" width={"100%"} />
        </div>
      </div>

      <div className="px-4 text-gray-700 font-semibold space-y-8">
        <div className="space-y-6 text-center">
          <h3 className="text-5xl font-bold">
            <span>Future</span>&nbsp;<span className="text-sky-400">Map</span>
          </h3>
          <p>Check out our FutureMap to find out our stages of development and our main goals that we set.</p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} plugins={[AutoHeight(), Autoplay({ delay: 2000 })]}>
          <CarouselContent>
            <CarouselItem className="space-y-4  md:basis-1/2">
              <div className="text-right bg-gradient-to-r from-transparent to-blue-300 p-2 text-xl font-bold">2023</div>
              <Timeline2023 />
            </CarouselItem>
            <CarouselItem className="space-y-4  md:basis-1/2">
              <div className="text-right bg-gradient-to-r from-transparent to-blue-300 p-2 text-xl font-bold">2024</div>
              <Timeline2024 />
            </CarouselItem>
            <CarouselItem className="space-y-4  md:basis-1/2">
              <div className="text-right bg-gradient-to-r from-transparent to-blue-300 p-2 text-xl font-bold">2025</div>
              <Timeline2025 />
            </CarouselItem>
            <CarouselItem className="space-y-4  md:basis-1/2">
              <div className="text-right bg-gradient-to-r from-transparent to-blue-300 p-2 text-xl font-bold">2026</div>
              <Timeline2026 />
            </CarouselItem>
            <CarouselItem className="space-y-4  md:basis-1/2">
              <div className="text-right bg-gradient-to-r from-transparent to-blue-300 p-2 text-xl font-bold">2027</div>
              <Timeline2027 />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <footer className="text-gray-700">
        <div className="bg-[#ebfdfd] grid grid-cols-12 gap-6 p-8">
          <div className="col-span-12 sm:col-span-6 space-y-4">
            <img src="/images/logo.svg" loading="lazy" alt="logo" width={100} height={100} />
            <div className="text-3xl font-extrabold">WalletGrow</div>
            <div className="text-lg">
              Most <b className="text-2xl">Innovative</b> and <b className="text-2xl">Reliable</b> Crypto Earning
              Program
            </div>
            <div className="sm:flex sm:flex-col sm:justify-center space-y-4">
              <div className="font-bold text-primary">Stay Connected</div>
              <ul className="flex flex-row gap-4">
                <li>
                  <a href="https://t.me/WalletGrow1" target="_blank">
                    <img src="/images/socials/telegram.png" loading="lazy" alt="telegram" width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Wallet_GrowX?t=FN-JlCx7hgclQ8gVCsa_kw&s=09" target="_blank">
                    <img src="/images/socials/twitter.png" loading="lazy" alt="telegram" width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@walletgrowX" target="_blank">
                    <img src="/images/socials/youtube.png" loading="lazy" alt="telegram" width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61553556848909&mibextid=2JQ9oc" target="_blank">
                    <img src="/images/socials/facebook.png" loading="lazy" alt="telegram" width={32} height={32} />
                  </a>
                </li>
                <li>
                  <a href="https://www.reddit.com/u/walletgrowX/s/LB8rTKv92Y" target="_blank">
                    <img src="/images/socials/reddit.png" loading="lazy" alt="telegram" width={32} height={32} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-2 sm:col-span-6 place-items-center font-bold gap-x-6">
            <ul className="col-span-1 space-y-2">
              <li>Investment</li>
              <li>Monitoring</li>
              <li>Insurance</li>
              <li>Associate</li>
              <li>Insurance agent</li>
            </ul>
            <ul className="col-span-1 space-y-2">
              <li>Contact Us</li>
              <li>Terms and Conditions</li>
              <li>About Us</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 bg-[#c8e6f5] text-sm">
          &copy; {new Date().getFullYear()} WalletGrow LTD. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
