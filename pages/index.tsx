import Layout from "../components/layout/layout";

export default function Home(): JSX.Element {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                    Welcome to JobAndTalent!
                </h1>
                <h2 className="text-2xl font-bold text-white">
                    A place to find and apply for jobs
                </h2>
            </div>
        </Layout>
    );
}
