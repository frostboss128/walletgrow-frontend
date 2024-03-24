import React from "react";
import { HelpCircle, CircleUserRound, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";
import { useLogoutMutation } from "../../slices/usersApiSlice";
import { useGetWalletInfoQuery } from "../../slices/walletApiSlice";
import { useGetAllInvestmentTypeQuery, useGetInvestmentsQuery } from "../../slices/adminApiSlice";
import { Link } from "react-router-dom";
import FutureCard from "./FutureCard";
import WalletInfo from "./WalletInfo";
import Plan from "./Plan";
import { toast } from "sonner";

const Wallet = () => {
  const dispatch = useDispatch();
  const { userinfo } = useSelector(({ auth }) => auth);
  const [logoutApiCall, { isLoading: logoutLoading }] = useLogoutMutation();
  const { data: walletInfo, isLoading: walletInfoLoading, isError: walletInfoIsError } = useGetWalletInfoQuery();
  const {
    data: investmentType,
    isLoading: investmentTypeLoading,
    isError: investmentTypeIsError,
  } = useGetAllInvestmentTypeQuery();
  const { data: invests, isLoading: investsLoading, isError: investsIsError } = useGetInvestmentsQuery();

  const logOutHandler = async e => {
    e.preventDefault();
    try {
      await logoutApiCall();
      dispatch(logout());
      toast.success(`logged out`);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="pb-6 space-y-8">
      <div className="relative px-4 sm:px-16">
        <div className="flex flex-row items-center gap-4 px-4 py-4 sm:py-6 font-bold text-gray-700 min-w-[240px] after:content-[''] after:h-80 after:sm:h-96 after:absolute after:bg-cyan-200 after:w-full after:left-0 after:-z-10 after:rounded-b-3xl after:sm:rounded-b-[75px]">
          <Link to="/account">
            <CircleUserRound size={40} />
          </Link>
          <div className="flex-grow text-md sx:text-xl">{userinfo?.username}</div>
          <div>Log out</div>
          <LogOut onClick={logOutHandler} />
        </div>
        <WalletInfo walletInfo={walletInfo} />
      </div>
      <div className="px-4 sm:px-16 space-y-4">
        <div className="flex flex-row justify-between w-full items-center px-8 mt-12 sm:mt-20 font-bold text-2xl text-gray-600">
          <div>Index</div>
          <HelpCircle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12">
          {investmentType?.map(invType => (
            <Plan key={invType._id} invType={invType} />
          ))}
        </div>

        {/* <div className="flex flex-row justify-between w-full items-center px-8 font-bold  text-2xl text-gray-600">
          <div>Future</div>
          <HelpCircle />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12">
          <FutureCard
            src="/images/wallet/incentive.svg"
            name="Incentive"
            description="0.3% - 0.8% Daily"
            type="Unlock now"
          />
          <FutureCard src="/images/wallet/entertainment.svg" name="Entertainment" description="" type="Soon" />
          <FutureCard src="/images/wallet/savings.svg" name="Savings" description="" type="Soon" />
          <FutureCard src="/images/wallet/contact.svg" name="Contact" description="" type="Soon" />
        </div> */}
      </div>
    </div>
  );
};

export default Wallet;
