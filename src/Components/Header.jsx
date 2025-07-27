import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Popover } from "flowbite-react";
import { TbMenu3 } from "react-icons/tb";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <div className='flex backdrop-blur supports-backdrop-blur:bg-white/95 justify-between rounded-b-lg items-center mx-0 mb-2'>
      <div className="p-1 flex justify-between items-center w-full">

        <a href="#home" className="flex items-center">
          <img src="/images/croppedNewRoyalsome.png" className="cover sm:h-14 h-12" alt="Royalsome Logo" />
        </a>

        <div className="hidden md:flex justify-between items-center gap-2 sm:gap-5 mr-5">
          <a className="!text-slate-950 !text-sm !font-semibold !cursor-pointer button !hover:text-cyan-400" href="#home">Home</a>
          <a className="!text-slate-950 !text-sm !font-semibold !cursor-pointer button !hover:text-cyan-400" href="#services">About</a>
          <a className="!text-slate-950 !text-sm !font-semibold !cursor-pointer button !hover:text-cyan-400" href="#resume">Insurance</a>
          <a className="!text-slate-950 !text-sm !font-semibold !cursor-pointer button !hover:text-cyan-400" href="#contact">Contact</a>
          <a className="!text-slate-950 !text-sm !font-semibold !cursor-pointer button !hover:text-cyan-400" href="#projects"></a>
          <button className=" button !text-sm !font-semibold  rounded-xl px-2 py-1 focus:ring-0">
            <a href="tell:+254722395474" className="text-slate-900">Call us</a>
          </button>
        </div>

        <div className="md:hidden mr-5">
          <Popover open={open} onOpenChange={setOpen} placement="bottom-end"
            content={
              <div className="flex flex-col p-2 bg-seven rounded-lg shadow-md w-40">
                <a href="#home" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Home</a>
                <a href="#services" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">About</a>
                <a href="#resume" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Resume</a>
                <a href="#projects" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Insurance</a>
                <a href="#contact" onClick={handleLinkClick} className="text-slate-400 py-1 hover:text-cyan-500">Contact</a>
                <button className="mt-2 rounded-xl px-2 py-1 w-full">
                  <a href="tell:+254722395474" onClick={handleLinkClick} className="text-slate-900">Call us</a>
                </button>
              </div>
            }>
            <TbMenu3 size={26} className="cursor-pointer text-slate-950" />
          </Popover>
        </div>
      </div>
    </div>
  );
}