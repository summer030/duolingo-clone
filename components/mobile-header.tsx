import { MobileSidebar } from '@/components/mobile-sidebar';

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 h-[50px] w-full fixed top-0 flex items-center bg-lime-500 border-b z-50">
      <MobileSidebar />
    </nav>
  );
};
