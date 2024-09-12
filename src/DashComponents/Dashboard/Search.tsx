import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/ui/input";

export function Search() {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FiSearch className="text-slate-400" />
      </span>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] text-white placeholder:text-slate-400 border border-slate-700 pl-10" // Adjust padding for the icon
      />
    </div>
  );
}
