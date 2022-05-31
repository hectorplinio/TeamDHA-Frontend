import { FunctionComponent } from "react";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-blue-jat m-max w-full p-4">{children}</main>
            <Footer />
        </>
    );
};
export default Layout;
