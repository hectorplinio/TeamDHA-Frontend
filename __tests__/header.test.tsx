import { render } from "@testing-library/react";
import Header from "../components/layout/header";
render(<Header />);

describe("Testing the header", () => {
    it("renders the header", () => {
        const header = document.querySelector("header");
        expect(header).not.toBeNull();
    });
    it("renders the logoMini", () => {
        const logo = document.getElementsByClassName("logoMini");
        expect(logo).not.toBeNull();
    });
    it("renders the logoName", () => {
        const logoName = document.getElementsByClassName("logoName");
        expect(logoName).not.toBeNull();
    });
});
