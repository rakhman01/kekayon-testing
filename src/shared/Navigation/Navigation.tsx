import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION, NAVIGATION_DEMO, NAVIGATION_DEMO_2 } from "@/data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative w-full">
      {NAVIGATION.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
