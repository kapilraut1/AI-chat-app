import { ClerkLoaded } from "@clerk/nextjs";
import React from "react";
import Header from "@/components/ui/ui/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkLoaded>
      <div className="flex-1 flex flex-col h-screen ">
        <Header />
        {children}
      </div>
    </ClerkLoaded>
  );
};

export default layout;
