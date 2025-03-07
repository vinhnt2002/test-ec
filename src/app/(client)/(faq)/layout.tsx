import RightColumn from "@/components/Faq/RightColumn";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto px-4 py-8">
      <div className="col-span-1 md:col-span-2">{children}</div>
      <div className="col-span-1 md:sticky md:top-4">
        <RightColumn />
      </div>
    </div>
  );
};

export default ClientLayout;
