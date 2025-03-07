import React from "react";
import RightColumn from "./RightColumn";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4 container mx-auto px-4 py-8">
      <div className="col-span-2">{children}</div>
      <div className="col-span-1 md:sticky md:top-4">
        <RightColumn />
      </div>
    </div>
  );
};

export default PageLayout;
