import Layout from "./Layout.tsx";

function Home() {
  return (
    <Layout>
      {() => (
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">My Bookstore</h1>
          <img src="../../assets/geilan-malet-bates-uRLECci4Hl4-unsplash.jpg" alt="Bookstore photo" />
          <p className="text-lg">This is a simple React application using TypeScript and Tailwind CSS that implements
            bookstore functionality</p>
        </div>
      )}
    </Layout>
  );
}

export default Home;