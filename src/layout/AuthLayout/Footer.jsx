import React from "react";
import { Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-700 mt-12">
      <div className="bg-[#ebfdfd] max-w-full p-6 flex flex-col w-full sm:flex-row sm:gap-6 sm:justify-between  space-y-6">
        <div className="space-y-4">
          <img src="/images/logo.svg" alt="logo" width={100} height={100} />
          <div className="text-3xl font-extrabold">WalletGrow</div>
          <div className="text-lg">
            Most <b className="text-2xl">Innovative</b> and <b className="text-2xl">Reliable</b> Crypto Earning Program
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:justify-center space-y-4">
          <div className="font-bold text-primary">Stay Connected</div>
          <ul className="flex flex-row gap-4">
            <li>
              <a href="https://t.me/WalletGrow1" target="_blank">
                <img src="/images/socials/telegram.png" alt="telegram" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://x.com/Wallet_GrowX?t=FN-JlCx7hgclQ8gVCsa_kw&s=09" target="_blank">
                <img src="/images/socials/twitter.png" alt="telegram" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@walletgrowX" target="_blank">
                <img src="/images/socials/youtube.png" alt="telegram" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61553556848909&mibextid=2JQ9oc" target="_blank">
                <img src="/images/socials/facebook.png" alt="telegram" width={32} height={32} />
              </a>
            </li>
            <li>
              <a href="https://www.reddit.com/u/walletgrowX/s/LB8rTKv92Y" target="_blank">
                <img src="/images/socials/reddit.png" alt="telegram" width={32} height={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 bg-[#c8e6f5] text-sm">
        &copy; {new Date().getFullYear()} WalletGrow LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
