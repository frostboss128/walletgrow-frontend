import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Mail, KeyRound } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Switch } from "../../components/ui/switch";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => setData({ ...data, [e.currentTarget.name]: e.currentTarget.value });

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid place-content-center min-h-screen ">
      <Card className="flex flex-col min-w-[325px] max-w-lg mx:w-[425px] sm:w-[550px] p-6 rounded-xl sm:p-10 my-6">
        <img src="/images/logo.svg" alt="logo" width={100} height={100} className="flex self-center justify-around" />

        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">Sign in to access your account</p>
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
          </div>
          <div className="w-full flex flex-row justify-start space-x-4">
            <div>
              <Switch />
            </div>
            <div>Remember & Auto login</div>
          </div>
          <div className="w-full space-y-4">
            <div>
              <Button
                variant="default"
                className="w-full px-8 py-3 font-semibold rounded-full"
                type="submit"
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </div>
            <div>
              <Link to="/auth/register">
                <Button variant="outline" className="w-full px-8 py-3 font-semibold rounded-full">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
