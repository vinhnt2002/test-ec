import Footer from "@/components/Shared/Footer/Footer";
import Header from "@/components/Shared/Header/Header";
import AuthProvider from "@/providers/AuthProvider";
import { Suspense } from "react";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <Suspense fallback={<div>...loading</div>}>
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </Suspense>
    </AuthProvider>
  );
};

export default ClientLayout;
