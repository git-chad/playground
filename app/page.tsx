import Link from "next/link";

export default function Home() {
  const links = [
    {
      href: "/grids",
      label: "Grids",
    },
    {
      href: "/dsplcd-text",
      label: "Displaced text",
    },
    {
      href: "/sphere",
      label: "Sphere",
    },
    {
      href: "/ascii-text",
      label: "ASCII text",
    },
    {
      href: "/wave",
      label: "Wave"
    }
  ];

  return (
    <main className="paradroid--regular min-h-svh h-full bg-[#f5f5f5] text-zinc-900">
      <section className="max-w-7xl m-auto grid grid-cols-12 py-64">
        <h1 className="text-display-medium tracking-tighter leading-none col-span-7">
          @BEWARETHERAT
        </h1>
        <nav className="flex flex-col gap-2 col-start-12 mt-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`text-xl uppercase hover:font-semibold`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
