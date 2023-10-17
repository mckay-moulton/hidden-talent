import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-hidden-black flex flex-col items-center content-center justify-center justify-items-center px-4 py-8 gap-6 text-white text-center">
      <Link href="/" className="flex items-center justify-center">
          <img
            src="/hidden-talent-logo-full-width-dark.png"
            width="243"
            height="34"
            alt="Home"
            className="w-4/5 lg:w-1/3"
          />
      </Link>
      <p>We are proudly a family owned, minority-owned, faith-based business.</p>
      <div className="flex justify-center gap-4">
        <Link href="#">
          <img 
            src="/icon_facebook.svg"
            width="36"
            height="36"
            alt="Facebook"
          />
        </Link>
        <Link href="#">
          <img 
            src="/icon_instagram.svg"
            width="36"
            height="36"
            alt="Instagram"
          />
        </Link>
        <Link href="#">
          <img 
            src="/icon_linkedin.svg"
            width="36"
            height="36"
            alt="Linkedin"
          />
        </Link>
        <Link href="#">
          <img 
            src="/icon_Youtube.svg"
            width="36"
            height="36"
            alt="Youtube"
          />
        </Link>
      </div>
      <p>&copy; 2023 Hidden Talent</p>
      <p>Created by <Link href="https://www.varial.dev" className="text-hidden-teal-dark">Varial Web Development</Link></p>
    </footer>
  )
}