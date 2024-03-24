import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetWalletInfoQuery } from "../../slices/walletApiSlice";
import {
  useGetInvestmentTypeQuery,
  useStartInvestmentMutation,
  useGetInvestmentsQuery,
  useGetInvestmentQuery,
} from "../../slices/adminApiSlice";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Timer from "../../components/ui/timer";
import HeaderBar from "../../components/HeaderBar";
import { toast } from "sonner";
import isEmpty from "../../utils/isEmpty";

const Investment = () => {
  const { typeId } = useParams();
  const {
    data: walletInfo,
    isLoading: walletInfoLoading,
    isError: walletInfoIsError,
    refetch: walletInfoRefetch,
  } = useGetWalletInfoQuery();
  const {
    data: investmentType,
    isLoading: investmentTypeLoading,
    isError: investmentTypeIsError,
    refetch: investmentTypeRefetch,
  } = useGetInvestmentTypeQuery(typeId);
  const [startInvestment, { isLoading: startInvestmentLoading, isError: startInvestmentIsError }] =
    useStartInvestmentMutation();
  const { data: invest, isLoading: investLoading, isError: investIsError, refetch } = useGetInvestmentQuery(typeId);

  const [data, setData] = useState({ amount: 50, option: 1 });

  useEffect(() => {
    if (invest?.coin) setData({ ...data, amount: invest.coin });
  }, [invest?.coin]);

  const startHandler = async e => {
    e.preventDefault();
    e.stopPropagation();
    if (data.amount < 50 || data.amount > parseFloat(walletInfo.coin)) return toast.warning("Invalid amount");
    try {
      const res = await startInvestment({ typeId, data }).unwrap();
      toast.success("New investment method has been started");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    } finally {
      walletInfoRefetch();
      investmentTypeRefetch();
      refetch();
    }
  };

  return (
    <div className="">
      <HeaderBar to="/wallet" title={investmentType?.name} />
      <div className="p-4 space-y-2">
        <div>
          <Label htmlFor="total">Available</Label>
          <Input type="text" name="total" defaultValue={walletInfo?.coin} disabled />
        </div>
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input type="number" name="duration" defaultValue={investmentType?.duration} disabled />
        </div>
        <div>
          <Label htmlFor="option">Advanced settings</Label>
          <Select
            name="option"
            onValueChange={value => setData({ ...data, option: value })}
            disabled={!isEmpty(invest)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select investment type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={1}>One time investment</SelectItem>
              <SelectItem value={2}>Reinvestment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="investment">Investment</Label>
          <Input
            type="number"
            name="investment"
            disabled={!isEmpty(invest)}
            value={data.amount}
            onChange={e => setData({ ...data, amount: e.target.value })}
            min={50}
            max={walletInfo?.coin}
          />
          <div className="text-right text-sm mt-1 font-semibold">Min: 50$</div>
        </div>
        {!isEmpty(invest) && <Timer endUTCTime={invest?.end} />}
        <div className="text-center pt-4">
          <Button className="w-full" onClick={startHandler} disabled={!isEmpty(invest)}>
            Start investment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Investment;
