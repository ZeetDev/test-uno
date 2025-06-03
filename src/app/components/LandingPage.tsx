"use client";

import Button from "./Button";

const LandingPage = () => {
    return (
        <div className="min-h-screen">
            <Button bgColor="#fff" mt={40} />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
                            Build Something <span className="text-yellow-400">Amazing</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-10 text-blue-100">
                            Create stunning websites with the power of UnoCSS and Next.js
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 rounded-full bg-yellow-400 text-gray-900 font-bold hover:(bg-yellow-300 scale-105) transform transition duration-300 shadow-lg">
                                Get Started
                            </button>
                            <button className="px-8 py-4 rounded-full bg-transparent border-2 border-white hover:(bg-white/10 scale-105) transform transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-10 h-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Amazing Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Lightning Fast</h3>
                            <p className="text-gray-600">
                                Optimized for speed and performance, delivering an exceptional user experience.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Customizable</h3>
                            <p className="text-gray-600">
                                Easily customize every aspect of your design with UnoCSS flexible utility classes.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Secure & Reliable</h3>
                            <p className="text-gray-600">
                                Built with security in mind, ensuring your application is protected and reliable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Testimonial 1 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mr-4">
                                    JD
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">John Doe</h3>
                                    <p className="text-blue-200">CEO, TechCorp</p>
                                </div>
                            </div>
                            <p className="italic">
                                This platform has transformed our business. The speed and flexibility are unmatched in
                                the industry.
                            </p>
                            <div className="flex mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-2xl font-bold mr-4">
                                    AS
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Alice Smith</h3>
                                    <p className="text-blue-200">Designer, CreativeStudio</p>
                                </div>
                            </div>
                            <p className="italic">
                                As a designer, I appreciate the attention to detail and the clean, modern aesthetics
                                this platform provides.
                            </p>
                            <div className="flex mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                            <div className="flex items-center mb-6">
                                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold mr-4">
                                    RJ
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Robert Johnson</h3>
                                    <p className="text-blue-200">Developer, CodeMasters</p>
                                </div>
                            </div>
                            <p className="italic">
                                The development experience is seamless. UnoCSS combined with Next.js is a game-changer
                                for productivity.
                            </p>
                            <div className="flex mt-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-yellow-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Choose Your Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Basic Plan */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                            <div className="p-8 bg-gray-100">
                                <h3 className="text-2xl font-bold text-center text-gray-800">Basic</h3>
                                <div className="flex justify-center my-6">
                                    <span className="text-5xl font-bold text-gray-800">$29</span>
                                    <span className="text-gray-600 self-end ml-1">/month</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">5 Projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">20GB Storage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">Basic Support</span>
                                    </li>
                                </ul>
                                <button className="w-full mt-8 py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        {/* Pro Plan */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform scale-105 z-10 border-2 border-blue-500">
                            <div className="p-8 bg-blue-600 text-white">
                                <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-800">
                                    POPULAR
                                </div>
                                <h3 className="text-2xl font-bold text-center">Pro</h3>
                                <div className="flex justify-center my-6">
                                    <span className="text-5xl font-bold">$59</span>
                                    <span className="self-end ml-1">/month</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">15 Projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">50GB Storage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">Priority Support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">Advanced Analytics</span>
                                    </li>
                                </ul>
                                <button className="w-full mt-8 py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300 shadow-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
                            <div className="p-8 bg-gray-100">
                                <h3 className="text-2xl font-bold text-center text-gray-800">Enterprise</h3>
                                <div className="flex justify-center my-6">
                                    <span className="text-5xl font-bold text-gray-800">$99</span>
                                    <span className="text-gray-600 self-end ml-1">/month</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">Unlimited Projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">100GB Storage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">24/7 Dedicated Support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                        <span className="text-gray-600">Custom Integrations</span>
                                    </li>
                                </ul>
                                <button className="w-full mt-8 py-3 px-6 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl mb-10 max-w-3xl mx-auto">
                        Join thousands of satisfied customers who are already building amazing websites with our
                        platform.
                    </p>
                    <button className="px-8 py-4 rounded-full bg-white text-indigo-700 font-bold hover:bg-gray-100 transform hover:scale-105 transition duration-300 shadow-lg text-lg">
                        Start Your Free Trial
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Product</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Testimonials
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Guides
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        API
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-400 transition">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
