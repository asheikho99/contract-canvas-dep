import DashboardNav from "@/components/dashboard/site-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <DashboardNav />
      {children}
    </div>
  );
}
