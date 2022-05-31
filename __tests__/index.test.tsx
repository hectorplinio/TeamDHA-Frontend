import { render, waitFor } from "@testing-library/react";
import Home from "../pages/index";

jest.mock("next/head", () => {
    return {
        __esModule: true,
        default: ({ children }: { children: Array<React.ReactElement> }) => {
            return <>{children}</>;
        },
    };
});
describe("start the server", () => {
    it("Navigate to our website  ", () => {
        expect(window.location.href).toBe("http://localhost/");
    });
    it("use jsdom in this test file", () => {
        const element = document.createElement("div");
        expect(element).not.toBeNull();
    });
    it("renders homepage unchanged", async () => {
        const { getByText } = render(<Home />);
        await waitFor(() => {
            expect(getByText("Welcome to JobAndTalent!")).toBeInTheDocument();
        });
    });
});
