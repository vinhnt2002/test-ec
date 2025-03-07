import SidebarProfile from "@/components/UserProfile/SidebarProfile";
import Image from "next/image";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#eff0f5]">
      <div className="p-4 flex items-center space-x-3 mb-2">
        <Image
          src="https://printerval.com/images/user.png"
          alt="User avatar"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          width={48}
          height={48}
        />
        <span className="font-medium text-gray-800 text-sm sm:text-base">
          Tuấn Kiệt Trần
        </span>
      </div>

      {/* Mobile layout - stacked */}
      <div className="px-4 md:hidden">
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <SidebarProfile />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">{children}</div>
      </div>

      {/* Tablet and desktop layout - side by side */}
      <div className="hidden md:grid md:grid-cols-12 md:gap-4 px-4">
        <div className="md:col-span-4 lg:col-span-3 bg-white rounded-lg shadow-md p-4 h-fit">
          <SidebarProfile />
        </div>
        <div className="md:col-span-8 lg:col-span-9 bg-white rounded-lg shadow-md p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
