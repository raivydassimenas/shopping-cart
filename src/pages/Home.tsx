import Layout from "./Layout.tsx";

function Home() {
    return (
        <Layout>
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold mb-4">Welcome to My Application</h1>
                <p className="text-lg">This is a simple React application using TypeScript and Tailwind CSS.</p>
            </div>
        </Layout>
    );
}

export default Home;