import { useLocation } from 'react-router-dom'; // Import useLocation for detecting active route
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import logo from '../assets/logo.svg'; // Adjust path if needed
import { Search } from './Dashboard/Search';
import TeamSwitcher from './Dashboard/TeamSwitcher';

const Navbar = () => {
  const { pathname } = useLocation(); // Get the current path

  // Define links and active class
  const navLinks = [
    { to: '/overview', label: 'Overview' },
    { to: '/assets', label: 'Assets' },
    { to: '/workorders', label: 'Workorders' },
    { to: '/inventory', label: 'Inventory' },
    { to: '/reports', label: 'Reports' },
  ];

  return (
    <header className="border-b bg-slate-900">
      <div className="flex h-14 items-center px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-7" /> {/* Adjust height as needed */}
        </div>

        {/* Navigation and other components */}
        <nav className="flex items-center flex-1 justify-center space-x-4 lg:space-x-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={cn(
                "text-sm font-medium transition-colors px-3 py-1 rounded-lg",
                {
                  "hover:text-slate-100": pathname !== to,
                  "bg-white text-black  ": pathname === to,
                  "text-muted-foreground": pathname !== to
                }
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* TeamSwitcher and Authentication Buttons */}
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <TeamSwitcher />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
