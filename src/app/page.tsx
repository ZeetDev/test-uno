"use client";

import Button from "./components/Button";

function Home() {
    return (
        <div grid place-items-center min-h-screen w-full bg-blue-100 text-black>
            <Button className="bg-green-500 px-4 py-2" mt="400">
                Read More
            </Button>
        </div>
    );
}

export default Home;
