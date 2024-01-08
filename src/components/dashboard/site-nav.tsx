import React from "react";

import SiteBrand from "../site-brand";
import ThemeSwitcher from "../theme-switcher-button";

const DashboardNav = () => {
  return (
    <header className="flex flex-row shadow border-b">
      <div className="flex flex-row items-center justify-between basis-full container mx-auto py-2.5">
        <SiteBrand />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default DashboardNav;
