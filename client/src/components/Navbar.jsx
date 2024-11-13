import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const NavbarItem = ({ title, onClick, to, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {onClick ? (
                <button onClick={onClick} className="text-white">
                    {title}
                </button>
            ) : (
                <a href={to} className="text-white">{title}</a>
            )}
        </li>
    );
};

const Navbar = ({ scrollToServices, scrollToTransactions, scrollToMarket, scrollToTutorial }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#0f0e13]/60 backdrop-blur-md z-50 flex md:justify-center justify-between items-center p-4 shadow-xl rounded-full">
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center">
                <NavbarItem title="Exchange" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                <NavbarItem title="Market" onClick={scrollToMarket} />
                <NavbarItem title="Services" onClick={scrollToServices} />
                <NavbarItem title="Transactions" onClick={scrollToTransactions} />
                <NavbarItem title="Tutorial" onClick={scrollToTutorial} />
                
            </ul>

            <div className="flex relative">
                {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => setToggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md bg-[#0f0e13]/70 backdrop-blur-md text-white animate-slide-in">
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        <NavbarItem title="Exchange" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} classProps="my-2 text-lg" />
                        <NavbarItem title="Market" onClick={() => { setToggleMenu(false); scrollToMarket(); }} classProps="my-2 text-lg" />
                        <NavbarItem title="Services" onClick={() => { setToggleMenu(false); scrollToServices(); }} classProps="my-2 text-lg" />
                        <NavbarItem title="Transactions" onClick={() => { setToggleMenu(false); scrollToTransactions(); }} classProps="my-2 text-lg" />
                        <NavbarItem title="Tutorial" onClick={() => { setToggleMenu(false); scrollToTutorial(); }} classProps="my-2 text-lg" />
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
