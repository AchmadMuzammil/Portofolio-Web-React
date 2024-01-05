
// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center
      gap-y-6 py-8">
        {/* logo */}
        <Link href={'/'}>
        <h1 className="font-extralight text-[20px]">Portofolio <span className="font-extrabold text-accent text-[28px]">Ku.</span></h1>
        </Link>
        {/* social */}
        <Socials/>
      </div>
    </div>
  </header>
  );
};

export default Header;
