import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Mail, UserSearch, ShieldPlus, KeyRound } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: "", username: "", password: "", repassword: "", code: "" });
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });
  const handleCheckChange = (e) => (e.target.dataset.state !== "unchecked" ? setDisabled(true) : setDisabled(false));

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid place-content-center min-h-screen">
      <Card className="flex flex-col min-w-[325px] max-w-md mx:w-[425px] sm:w-[550px] p-6 rounded-md sm:p-10 m-12">
        <img src="/images/logo.svg" alt="logo" width={100} height={100} className="flex self-center justify-around" />

        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-400">Create your account for free</p>
        </div>
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 rounded-md border px-4 divide-x-2">
              <div>
                <Mail />
              </div>
              <div className="flex-grow">
                <Input
                  type="email"
                  placeholder="Email"
                  className="border-none w-full"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-md border px-4 divide-x-2">
              <div>
                <UserSearch />
              </div>
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Username"
                  className="border-none w-full"
                  name="username"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 rounded-md border px-4 divide-x-2">
              <div>
                <KeyRound />
              </div>
              <div className="flex-grow">
                <Input
                  type="password"
                  placeholder="Password"
                  className="border-none w-full"
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 rounded-md border px-4 divide-x-2">
              <div>
                <ShieldPlus />
              </div>
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Referral Code"
                  className="border-none w-full"
                  name="code"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center space-x-4">
            <Checkbox className="w-6 h-6" onClick={handleCheckChange} />
            <p>
              I agree with <b>Wallet Grow</b> Privacy Policy and Terms of Service
            </p>
          </div>
          <div className="w-full space-y-4">
            <div>
              <Button
                variant="default"
                disabled={disabled}
                className="w-full px-8 py-3 font-semibold rounded-full"
                type="submit"
                onClick={handleRegister}
              >
                Sign up
              </Button>
            </div>
            <div>
              <Link to="/auth/login">
                <Button variant="outline" className="w-full px-8 py-3 font-semibold rounded-full">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
