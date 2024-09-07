/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pNosreIJa4z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function Component() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#1e1e1e] min-h-screen flex flex-col">
      <header className="bg-[#ffd166] dark:bg-[#2b2b2b] py-6 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center text-4xl font-bold text-white">
            🧌
          </div>
          <h1 className="text-2xl font-bold text-[#333] dark:text-white">Troll UI</h1>
        </div>
        <button className="bg-[#06d6a0] hover:bg-[#04b38a] text-white font-bold py-2 px-4 rounded-full transition-colors">
          Join the Trolls
        </button>
      </header>
      <main className="flex-1 py-12 px-4 md:px-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#333] dark:text-white mb-6">Troll-Inspired Buttons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-[#ffd166] hover:bg-[#ffca4a] text-[#333] font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
              <span className="mr-2">🧌</span>
              Click me
            </button>
            <button className="bg-[#ff6b6b] hover:bg-[#ff4d4d] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
              <span className="mr-2">😈</span>
              Mischief
            </button>
            <button className="bg-[#06d6a0] hover:bg-[#04b38a] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
              <span className="mr-2">🤩</span>
              Delight
            </button>
            <button className="bg-[#118ab2] hover:bg-[#0e7491] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center">
              <span className="mr-2">🤡</span>
              Surprise
            </button>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#333] dark:text-white mb-6">Troll Avatars</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ffd166] flex items-center justify-center text-4xl font-bold text-[#333]">
                🧌
              </div>
            </div>
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center text-4xl font-bold text-white">
                😈
              </div>
            </div>
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#06d6a0] flex items-center justify-center text-4xl font-bold text-white">
                🤩
              </div>
            </div>
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#118ab2] flex items-center justify-center text-4xl font-bold text-white">
                🤡
              </div>
            </div>
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ffd166] flex items-center justify-center text-4xl font-bold text-[#333]">
                😊
              </div>
            </div>
            <div className="bg-white dark:bg-[#2b2b2b] rounded-full p-4 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#ff6b6b] flex items-center justify-center text-4xl font-bold text-white">
                😒
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#333] dark:text-white mb-6">Troll FAQs</h2>
          <div className="bg-white dark:bg-[#2b2b2b] rounded-lg shadow-lg overflow-hidden">
            <Accordion>
              <AccordionItem>
                <AccordionTrigger className="flex items-center justify-between bg-[#ffd166] dark:bg-[#3b3b3b] text-[#333] dark:text-white font-bold py-4 px-6">
                  <span>What is a Troll?</span>
                  <span className="text-2xl">➕</span>
                </AccordionTrigger>
                <AccordionContent className="p-6">
                  <p>
                    Trolls are mythical creatures known for their mischievous and playful nature. They often have
                    vibrant, colorful appearances and enjoy causing harmless chaos.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionTrigger className="flex items-center justify-between bg-[#ff6b6b] dark:bg-[#3b3b3b] text-white font-bold py-4 px-6">
                  <span>How do I become a Troll?</span>
                  <span className="text-2xl">➕</span>
                </AccordionTrigger>
                <AccordionContent className="p-6">
                  <p>
                    To become a Troll, you must embrace your inner mischievousness and love for fun. Wear bright colors,
                    experiment with quirky fashion, and always be ready to surprise and delight those around you.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem>
                <AccordionTrigger className="flex items-center justify-between bg-[#06d6a0] dark:bg-[#3b3b3b] text-white font-bold py-4 px-6">
                  <span>What do Trolls do for fun?</span>
                  <span className="text-2xl">➕</span>
                </AccordionTrigger>
                <AccordionContent className="p-6">
                  <p>
                    Trolls love to engage in all sorts of playful activities, from dancing and singing to playing
                    practical jokes and hosting vibrant parties. They find joy in the simple things and always strive to
                    spread happiness and positivity.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-[#333] dark:text-white mb-6">Contact the Trolls</h2>
          <div className="bg-white dark:bg-[#2b2b2b] rounded-lg shadow-lg p-6">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[#333] dark:text-white font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-[#f8f9fa] dark:bg-[#3b3b3b] border-2 border-[#ddd] dark:border-[#555] rounded-full py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffd166] dark:focus:ring-[#06d6a0]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-[#333] dark:text-white font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-[#f8f9fa] dark:bg-[#3b3b3b] border-2 border-[#ddd] dark:border-[#555] rounded-full py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffd166] dark:focus:ring-[#06d6a0]"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-[#333] dark:text-white font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-[#f8f9fa] dark:bg-[#3b3b3b] border-2 border-[#ddd] dark:border-[#555] rounded-2xl py-3 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffd166] dark:focus:ring-[#06d6a0]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#ff6b6b] hover:bg-[#ff4d4d] text-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center"
              >
                <span className="mr-2">🧌</span>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-[#333] dark:bg-[#1e1e1e] text-white py-6 px-4 md:px-8">
        <div className="container max-w-7xl flex items-center justify-between">
          <p>&copy; 2023 Troll UI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#ffd166] hover:text-[#ffca4a] transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#06d6a0] hover:text-[#04b38a] transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#ff6b6b] hover:text-[#ff4d4d] transition-colors">
              <DiscIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
