"use client";
import { Barlow } from 'next/font/google';
import Image from 'next/image';
import Button from './components/Button';
import styles from './page.module.css';

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

function Home() {
  return (
    <div className="bg-body min-h-screen text-bodyText">
      {/* Hero Section */}
      <section className="container pt-20 pb-16 md:pt-32 md:pb-28">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-h1 text-black900 mb-6">
              Modern Design with <span className="text-primary">UnoCSS</span>
            </h1>
            <p className="text-bodyL mb-8 max-w-xl">
              Build beautiful, responsive web applications using the powerful UnoCSS framework with predefined themes and components.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-alternateWhite flex items-center justify-center">
              <Image
                src="/globe.svg"
                alt="Globe illustration"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-alternateWhite py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-black900 mb-4">Powerful Features</h2>
            <p className="text-bodyL max-w-2xl mx-auto">
              Everything you need to build modern, responsive web applications with UnoCSS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-body p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Image src="/file.svg" alt="Icon" width={24} height={24} />
              </div>
              <h3 className="text-h5 mb-3 text-black800">Theme System</h3>
              <p className="text-base">
                Easily customize colors, typography, and spacing with the built-in theme system.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-body p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Image src="/window.svg" alt="Icon" width={24} height={24} />
              </div>
              <h3 className="text-h5 mb-3 text-black800">Responsive Design</h3>
              <p className="text-base">
                Create layouts that look great on any device with responsive utilities.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-body p-8 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6">
                <Image src="/next.svg" alt="Icon" width={24} height={24} />
              </div>
              <h3 className="text-h5 mb-3 text-black800">Next.js Integration</h3>
              <p className="text-base">
                Seamlessly works with Next.js for building modern web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20 md:py-32">
        <div className="bg-primary rounded-2xl p-10 md:p-16 text-white text-center">
          <h2 className="text-h2 mb-6">Ready to Get Started?</h2>
          <p className="text-bodyL mb-10 max-w-2xl mx-auto">
            Join thousands of developers building amazing websites with UnoCSS and Next.js
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white !text-primary hover:(bg-white/90 text-primary)"
            >
              Start Building
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white !hover:(bg-white text-primary)"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-bodyS">© 2023 UnoCSS. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-bodyS hover:text-primary">Terms</a>
              <a href="#" className="text-bodyS hover:text-primary">Privacy</a>
              <a href="#" className="text-bodyS hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
