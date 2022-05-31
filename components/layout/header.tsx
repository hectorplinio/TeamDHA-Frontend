import Image from "next/image";
import Link from "next/link";
import logo from "../../images/jobAndTalentLogo.png";
import logoMini from "../../images/logo.png";
export default function Header(): JSX.Element {
    return (
        <header>
            <nav className="bg-white-500 flex">
                <div className="w-2/6">
                    <Link href="/">
                        <div className="flex m-8">
                            <div className="w-24 flex justify-center mr-4">
                                <Image
                                    src={logoMini}
                                    className="logoMini"
                                    id="logoMini"
                                    alt="Job and Talent Logo mini"
                                />
                            </div>
                            <div className="w-96 flex justify-center">
                                <Image
                                    src={logo}
                                    objectFit="fill"
                                    id="logoName"
                                    alt="Job and Talent Logo"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex-1 flex justify-end">
                    <ul className="flex justify-between items-center py-4 w-9/12 text-blue-jat font-sans text-xl">
                        <li className="flex items-center mx-4">
                            FREE REGISTER
                        </li>
                        <li className="flex items-center mx-4">OFFERS</li>
                        <Link href="/register">
                        <button
                            className="bg-blue-jat text-white font-bold py-2 px-4 rounded-3xl mx-4"
                            id="sign-in"
                        >
                            SIGN IN
                        </button>
                        </Link>
                        <Link href={"/login"}>
                            <button
                                className="bg-blue-jat text-white font-bold py-2 px-4 rounded-3xl mx-4"
                                id="log-in"
                            >
                                LOG IN
                            </button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
