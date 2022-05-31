import { render } from "@testing-library/react";
import Footer from "../components/layout/footer";

describe("Testing the footer", () => {
    it("renders the footer", () => {
        render(<Footer />);
        const footer = document.querySelector("footer");
        expect(footer).not.toBeNull();
    });
});
