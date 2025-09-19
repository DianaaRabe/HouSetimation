import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12" id="Footer">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div>
          <div className="flex gap-3 justify-center lg:justify-start">
            {/* <div className="size-10 bg-gradient-to-br from-teal-950 to-green-400 rounded-full" />
            <span className="text-xl font-bold">Vidi-Trano</span> */}
            <img src="/logo/HouSetimation3.webp" alt="logo" width={200} height={120} />
          </div>
          <p className="text-sm text-neutral-400 font-semibold text-center lg:text-start">
            Get to know your house value.
          </p>
        </div>

        {/* Links Block */}
        <div className="text-center lg:text-start">
          <h4 className="text-lg font-semibold mb-4">Features</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="#">Estimations</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Analytics</Link></li>
            <li><Link href="#">Documentation</Link></li>
          </ul>
        </div>

        <div className="text-center lg:text-start">
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        <div className="text-center lg:text-start">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Terms of Service</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 mt-12 ">
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row md:justify-between items-center gap-6">
          <div className="text-sm text-neutral-400">
            © {new Date().getFullYear()} HouSetimation. All rights reserved.
          </div>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Abonnez-vous à notre Newsletter"
              className="flex-1 rounded-l-md px-4 py-2 text-black text-sm bg-white"
            />
            <button
              type="submit"
              className="bg-teal-900 hover:bg-teal-950 text-sm text-white px-4 py-2 rounded-r-md ml-1"
            >
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>
    </footer>
  )
}
