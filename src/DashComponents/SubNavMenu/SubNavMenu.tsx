import * as React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for active state detection
import { cn } from "../../lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";

// Routes definitions for navigation menus
const dataPreprocessRoutes = [
  { title: "Preprocessing Overview", href: "/data-preprocess/overview", description: "General overview of data preprocessing." },
  { title: "Data Cleaning", href: "/data-preprocess/cleaning", description: "Techniques and methods for cleaning data." },
  { title: "Transformation", href: "/data-preprocess/transformation", description: "Data transformation methods and practices." },
];

const dataTransformRoutes = [
  { title: "Alert Dialog", href: "/data-transform/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
];

const featureExtractionRoutes = [
  { title: "Overview", href: "/feature-extraction/overview", description: "Introduction to feature extraction techniques." },
  { title: "Methods", href: "/feature-extraction/methods", description: "Different methods and algorithms for feature extraction." },
];

const ruleBasedAlertsRoutes = [
  { title: "Overview", href: "/rule-based-alerts/overview", description: "General overview of rule-based alerts." },
  { title: "Configuration", href: "/rule-based-alerts/configuration", description: "Configuring and managing rule-based alerts." },
];

export function SubNavMenu() {
  const location = useLocation(); // Hook to get current location

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/profile"
            className={cn(
              navigationMenuTriggerStyle(),
              location.pathname === "/profile" ? "bg-accent text-accent-foreground" : ""
            )}
          >
            Profile
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/import-file"
            className={cn(
              navigationMenuTriggerStyle(),
              location.pathname === "/import-file" ? "bg-accent text-accent-foreground" : ""
            )}
          >
            Import
          </Link>
        </NavigationMenuItem>

        {/* Data Preprocess Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Data Preprocess</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              {dataPreprocessRoutes.map((route) => (
                <ListItem key={route.title} title={route.title} to={route.href}>
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Data Transform Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Data Transform</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {dataTransformRoutes.map((route) => (
                <ListItem key={route.title} title={route.title} to={route.href}>
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Feature Extraction Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Feature Extraction</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {featureExtractionRoutes.map((route) => (
                <ListItem key={route.title} title={route.title} to={route.href}>
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Rule Based Alerts Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rule Based Alerts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {ruleBasedAlertsRoutes.map((route) => (
                <ListItem key={route.title} title={route.title} to={route.href}>
                  {route.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            to="/condition-assessment"
            className={cn(
              navigationMenuTriggerStyle(),
              location.pathname === "/condition-assessment" ? "bg-accent text-accent-foreground" : ""
            )}
          >
            Condition Assessment
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// ListItem component for rendering individual navigation links
const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { to: string; title: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={to}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-base font-medium", // Adjusted text size here
            className
          )}
          {...props}
        >
          <div className="text-lg font-semibold leading-none">{title}</div> {/* Increased text size */}
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default SubNavMenu;
