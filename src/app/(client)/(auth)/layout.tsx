import Image from "next/image";
import Link from "next/link";
import illustration from "@/assets/images/auth/user.png";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 bg-blue-50 relative">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <Image
            src={illustration}
            alt="Authentication illustration"
            className="object-contain max-w-full"
            width={500}
            height={500}
            priority
          />
          <div className="absolute top-24 left-24 w-16 h-16 bg-purple-100 rounded-md opacity-50 transform rotate-12"></div>
          <div className="absolute bottom-24 right-24 w-16 h-16 bg-purple-100 rounded-md opacity-50"></div>
          <div className="absolute top-1/2 right-32 w-12 h-12 bg-purple-100 rounded-md opacity-50"></div>

          <div className="absolute bottom-8 left-8">
            <div className="flex items-center space-x-2">
              <div className="text-xl font-bold text-blue-600">Your Brand</div>
            </div>
            <p className="text-sm text-gray-500">Your tagline here</p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo for mobile view */}
          <div className="flex justify-center mb-8 lg:hidden">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-600">
                Your Brand
              </span>
            </Link>
          </div>

          {/* Children content (sign-in or sign-up forms) */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
