import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const HeaderBar = ({ to, title }) => {
  return (
    <div className="bg-primary text-primary-foreground px-4 py-3 text-center relative">
      <Link to={to}>
        <ArrowLeftCircle className="absolute left-3" />
      </Link>
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderBar;
