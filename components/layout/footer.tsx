import logo from "../../images/footer.png";
import Image from "next/image";
import { useState } from "react";

export default function Footer(): JSX.Element {
    const handleImageLoad = e => {
        setImageWidth(e.naturalWidth);
        setImageHeight(e.naturalHeight);
    };
    const [imageWidth, setImageWidth] = useState(0);
    const [imageHeight, setImageHeight] = useState(0);
    const imageClick = () => {
        console.log("Click");
    };
    return (
        <footer className="flex m-auto justify-center p-8 ">
            <div>
                <div>
                    <p className="text-center font-sans text-xl">
                        Copyright © 2022 Team DHA Productions. All Rights
                        Reserved.
                    </p>
                </div>
                <nav className="flex m-auto ">
                    <ul className="flex m-12">
                        <Image
                            src={logo}
                            width={imageWidth}
                            height={imageHeight}
                            alt="Job and Talent Logo"
                            onLoadingComplete={e => handleImageLoad(e)}
                            onClick={() => imageClick()}
                        />
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
