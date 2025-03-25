import { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaLongArrowAltRight } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Helmet from "../assets/face.jpg";

interface HomeProps {
    handleSectionClick: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ handleSectionClick }) => {
    const location = useLocation();

    // Retrieve active section from localStorage on mount
    useEffect(() => {
        const savedSection = localStorage.getItem("activeSection");
        if (savedSection && location.pathname !== '/') {
            handleSectionClick(savedSection);
        }
    }, [location.pathname, handleSectionClick]);

    const handleUserClick = () => {
        handleSectionClick("projects");
        localStorage.setItem("activeSection", "projects");

    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full mt-24 lg:mt-0 tracking-widest">
            {/* content1 */}
            <div className="flex flex-col justify-center space-y-7 order-2 lg:order-1">
                <div className="space-y-6 flex items-center flex-col lg:border-r border-black">
                    <div className="flex flex-row items-start justify-start px-7 sm0:px-0  w-[400px] sm1:w-[500px]">
                        <h1 className="flex flex-col text-2xl mr-2 sm:text-3xl typewriter">
                            Hi, I'm Philipe Ayres
                        </h1>
                        <IoRocketOutline className="icon-hover" size={35} />
                    </div>
                    <p className="text-lg sm:text-xl px-7 sm0:px-0 w-[400px] sm1:w-[500px] leading-relaxed slide-right">
                        "I’m a passionate Frontend Developer with an eye for UI/UX Design who thrives on creating innovative and 
                        user-centered solutions. With strong communication and organizational skills, I excel in fast-paced 
                        environments and am dedicated to solving web problems with impactful solutions."
                    </p>
                </div>

                <Link to="/projects" onClick={handleUserClick}>
                    <button className=" flex flex-row items-center h-10 ml-5 mb-10 sm0:ml-0 lg:mb-0  icon-hover2  font-bold underline tracking-wider slide-right hover:no-underline">
                        View My Work
                        <FaLongArrowAltRight className="ml-1" size={20}/>
                    </button>
                </Link>
            </div>

            {/* content2 */}
            {/* image */}
            <div className="mb-10 lg:mb-0 flex flex-col lg2:flex-row order-1 lg:order-2 slide-left border-b lg:border-b-0 border-black">
                <img className="hidden lg:block rounded-full -scale-x-100 lg:mr-2" src={Helmet} width={500} />
                <img className="lg:hidden rounded-full -scale-x-100 lg:mr-2" src={Helmet} width={350} />
                <div className="flex flex-row lg2:flex-col justify-center mb-3 lg:mb-0 mt-8 space-x-2 lg2:space-x-0 lg2:mt-0 lg2:space-y-2 slide-up">
                    <a
                        href="https://www.linkedin.com/in/philipe-ayres-2b0aab206/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row icon-hover justify-center duration-200"
                    >
                        <FaLinkedin size={35} />
                    </a>
                    <a href="https://github.com/TenScoops" target="_blank" rel="noopener noreferrer">
                        <BsGithub className="icon-hover cursor-pointer" size={35} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
