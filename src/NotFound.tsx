import React from "react";
import { notFound } from "./dataset/notfound/notFound";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 w-full">
      <div className="flex flex-col items-center gap-5 py-8 px-4 md:px-8 w-full max-w-2xl">
        {notFound.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex flex-row items-center gap-3">
              <item.icon className="w-10 h-10 text-red-500" />
              <h1 className="text-3xl md:text-5xl">{item.title}</h1>
            </div>
            <p className="text-gray-500 text-base md:text-lg text-center">
              {item.desc}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
