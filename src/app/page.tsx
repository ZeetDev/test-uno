"use client";

import Button from "./components/Button";

function Home() {
    return (
        <div className="container">
            <div min-h-screen w-full text-black bg-pink>
                <h1 className="text-h1L accordion-down">Lorem ipsum dolor sit.</h1>
                <Button className="bg-green-500 px-4 py-2 animate-accordion-down" mt="10">
                    Read More
                </Button>
            </div>
        </div>
    );
}

export default Home;
