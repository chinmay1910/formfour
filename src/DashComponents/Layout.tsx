import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TreeFlow from './TreeFlow'; // Import TreeFlow
import { Card } from '../components/ui/card';
const Layout = () => {

  return (
    <div className="flex flex-col gap-1 h-screen">
      <Navbar />


      <div className="flex  gap-2  p-2" style={{ height: 'calc(100vh - 52px)' }}>
        <Card className="w-[270px]   bg-slate-900" >
          <TreeFlow /> {/* Add TreeFlow on the left */}
        </Card>

        <main className="flex-1 p-4 overflow-auto " > {/* Adjust height */}
          <Outlet /> {/* Render routed content to the right */}
        </main>
      </div>



    </div>
  );
};

export default Layout;
