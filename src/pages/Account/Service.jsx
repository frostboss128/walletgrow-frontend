import React from "react";
import { Button } from "../../components/ui/button";
import HeaderBar from "../../components/HeaderBar";

const Service = () => {
  return (
    <div className="space-y-8 pb-8">
      <HeaderBar to="/account" title="Customer Service Center" />

      <div className="flex flex-row justify-between items-center space-x-2 p-4">
        <div>
          <h5 className="text-lg font-bold">Customer service 24/7</h5>
          <p className="text-sm">
            Our customer service support are 24 hours online to answer your questions. Don't hesitate to contact us.
          </p>
        </div>
        <div>
          <img src="/images/account/service/service.svg" loading="lazy" alt="service" />
        </div>
      </div>

      <div className="px-4 space-y-6">
        <div className="space-y-2">
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/telegram-round.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Customer service 1</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/telegram-round.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Customer service 2</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/telegram-round.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Customer service 3</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/telegram-round.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Telegram Official Chat</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/telegram-round.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Telegram Official Channel</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/instagram.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Customer Service</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center space-x-2 p-3 bg-cyan-100 rounded-lg">
            <div>
              <img src="/images/account/service/messenger.svg" loading="lazy" alt="telegram-round" width={30} />
            </div>
            <div className="flex-grow">Customer Service</div>
            <div>
              <Button className="h-8 rounded-full bg-sky-300 text-gray-950">Contact</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        <div>Follow us</div>
        <ul className="flex flex-row justify-between space-x-4 items-center">
          <li>
            <img src="/images/account/service/telegram.svg" loading="lazy" alt="telegram" width={50} />
          </li>
          <li>
            <img src="/images/account/service/instagram.svg" loading="lazy" alt="telegram" width={50} />
          </li>
          <li>
            <img src="/images/account/service/facebook.svg" loading="lazy" alt="telegram" width={50} />
          </li>
          <li>
            <img src="/images/account/service/x.svg" loading="lazy" alt="telegram" width={50} />
          </li>
          <li>
            <img src="/images/account/service/youtube.svg" loading="lazy" alt="telegram" width={50} />
          </li>
          <li>
            <img src="/images/account/service/discord.svg" loading="lazy" alt="telegram" width={50} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
