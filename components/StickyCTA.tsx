import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-bg border-t border-white/10 p-4 pb-safe md:hidden">
      <Link
        href="https://wa.me/919561084600?text=Hi%20Nachiket!%20I%20want%20a%20free%20demo%20for%20my%20business."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex justify-center items-center bg-lime text-bg font-bold py-4 rounded-xl text-lg hover:bg-white transition-colors shadow-lg"
      >
        💬 Get Your Free Demo →
      </Link>
    </div>
  );
}
