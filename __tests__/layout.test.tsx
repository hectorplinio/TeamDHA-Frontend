import { render } from "@testing-library/react";
import Layout from "../components/layout/layout";
describe("Testing the layout", () => {
    it("renders the layout", () => {
        render(
            <Layout>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome to JobAndTalent!
                    </h1>
                </div>
            </Layout>
        );
        const layout = document.querySelector("main");
        expect(layout).not.toBeNull();
    });
});
