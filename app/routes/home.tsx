import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Asta Kosali Kosali" }];
}

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center px-8 py-4 bg-[#F2EDE5]">
        <div className="flex items-center gap-4">
          <img src="logo.png" alt="Logo" className="w-10" />
          <h1 className="text-xl font-bold text-primary">ASTA KOSALA KOSALI</h1>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="text-primary">
            Home
          </a>
          <a href="#" className="text-primary">
            About
          </a>
          <a href="#" className="text-primary">
            FAQ
          </a>
          <a href="#" className="px-4 py-2 bg-secondary text-white rounded">
            Login
          </a>
          <a href="#" className="px-4 py-2 bg-primary text-white rounded">
            Register
          </a>
        </nav>
      </header>

      <main className="px-8 py-4">
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Bali Building Simulator
          </h2>
          <p className="text-gray-600 mb-4">
            Use our simulator to design your traditional Balinese house easily
            and quickly!
          </p>
        </section>

        <section className="px-6 py-8 rounded-lg shadow-md bg-[#F2EDE5]">
          <h2 className="text-2xl font-bold text-primary mb-4">
            About Bali Building Simulator
          </h2>
          <p className="text-gray-600">
            This simulator is designed to help you create a traditional Balinese
            house design that is in accordance with the Asta Kosala Kosali
            philosophy.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="p-4 rounded bg-[#F2EDE5]">
              <summary className="cursor-pointer font-bold">
                What is Bali Building Simulator?
              </summary>
              <p className="mt-2 text-gray-600">
                Bali Building Simulator is a tool designed to help you create
                traditional Balinese house designs.
              </p>
            </details>
            <details className="p-4 rounded bg-[#F2EDE5]">
              <summary className="cursor-pointer font-bold">
                What features are offered on the Bali Building Simulator
                website?
              </summary>
              <p className="mt-2 text-gray-600">
                The Bali Building Simulator website provides two main features.
                First, the Location of Yard Door feature, which provides
                recommendations for the location of yard doors along with their
                philosophy based on the Asta Kosala Kosali principle. Second,
                the Building Layout feature, which provides recommendations for
                the layout of Balinese buildings and the distance between
                buildings in a yard according to the Asta Kosala Kosali
                principle.
              </p>
            </details>
            <details className="p-4 rounded bg-[#F2EDE5]">
              <summary className="cursor-pointer font-bold">
                Are the designs downloadable?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, you can save your design in PNG format.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="px-8 py-4 bg-gray-100 flex justify-between items-center">
        <p className="text-gray-600">&copy; 2024 ASTA KOSALA KOSALI</p>
        <a
          href="/simulator"
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Try Now!
        </a>
      </footer>
    </div>
  );
}
