import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight, Brain, Bot, Zap, BarChart3, Network, Layers, TrendingUp, MessageSquare, HeadphonesIcon, CheckCircle2 } from "lucide-react"

const menuItems = [
  { name: "Features", href: "#pilares" },
  { name: "Solution", href: "#processo" },
  { name: "Pricing", href: "#produtos" },
  { name: "About", href: "#contato" },
]

const pillars = [
  {
    icon: Brain,
    title: "Feature one",
    items: ["Lorem ipsum dolor", "Sit amet consectetur", "Adipiscing elit sed"],
  },
  {
    icon: Bot,
    title: "Feature two",
    items: ["Officiis laudantium", "Excepturi ducimus", "Rerum dignissimos"],
  },
  {
    icon: Zap,
    title: "Feature three",
    items: ["Tempora nam vitae", "Provident dolores"],
  },
  {
    icon: BarChart3,
    title: "Feature four",
    items: ["Iste provident", "Dolores laudantium"],
  },
]

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "Step one",
    description: "Officiis laudantium excepturi ducimus rerum dignissimos and tempora nam vitae.",
  },
  {
    number: "02",
    icon: Network,
    title: "Step two",
    description: "Excepturi ducimus iste provident dolores rerum dignissimos tempora nam vitae.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Step three",
    description: "Tempora nam vitae officiis laudantium excepturi ducimus rerum dignissimos.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Step four",
    description: "Rerum dignissimos officiis laudantium excepturi ducimus iste provident.",
  },
]

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-auto"
      >
        <rect width="32" height="32" rx="8" fill="url(#ag-gradient)" />
        <path
          d="M8 22L12 10L16 18L20 10L24 22"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="14" r="2" fill="white" fillOpacity="0.6" />
        <defs>
          <linearGradient id="ag-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-semibold text-lg tracking-tight text-foreground">
        Your <span className="text-zinc-400 dark:text-zinc-500">Brand</span>
      </span>
    </div>
  )
}

export default function Home() {
  const [menuState, setMenuState] = React.useState(false)

  const handleNav = (href: string) => {
    setMenuState(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      {/* ── NAV (exact hero-section-9 structure) ── */}
      <header>
        <nav
          data-state={menuState ? "active" : undefined}
          className="group fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
              <div className="flex w-full justify-between lg:w-auto">
                <a href="/" aria-label="home" className="flex items-center space-x-2">
                  <Logo />
                </a>

                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                  <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                </button>
              </div>

              <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNav(item.href)}
                          className="text-muted-foreground hover:text-accent-foreground block duration-150"
                          data-testid={`nav-link-${index}`}
                        >
                          <span>{item.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleNav("#contato")}
                    data-testid="button-nav-contact"
                  >
                    <span>Login</span>
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleNav("#contato")}
                    data-testid="button-nav-cta"
                  >
                    <span>Sign up</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ── BACKGROUND BLOBS (exact hero-section-9 structure) ── */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-87.5 absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        {/* ── HERO SECTION (exact hero-section-9 structure) ── */}
        <section className="overflow-hidden bg-white dark:bg-transparent">
          <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                Modern software testing reimagined
              </h1>
              <p className="mx-auto my-8 max-w-2xl text-xl text-muted-foreground">
                Officiis laudantium excepturi ducimus rerum dignissimos, and tempora nam vitae, excepturi ducimus iste provident dolores.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  size="lg"
                  onClick={() => handleNav("#contato")}
                  data-testid="button-hero-primary"
                >
                  <span>Start Building</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleNav("#pilares")}
                  data-testid="button-hero-secondary"
                >
                  <span>Learn more</span>
                </Button>
              </div>
            </div>
          </div>

          {/* ── PERSPECTIVE IMAGE (exact hero-section-9 structure) ── */}
          <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
            <div className="[perspective:1200px] [mask-image:linear-gradient(to_right,black_50%,transparent_100%)] -mr-16 pl-16 lg:-mr-56 lg:pl-56">
              <div className="[transform:rotateX(20deg)]">
                <div className="lg:h-[44rem] relative skew-x-[.36rad]">
                  <img
                    className="rounded-[--radius] z-[2] relative border dark:hidden"
                    src="https://tailark.com/_next/image?url=%2Fcard.png&w=3840&q=75"
                    alt="AG LABS dashboard"
                    width={2880}
                    height={2074}
                  />
                  <img
                    className="rounded-[--radius] z-[2] relative hidden border dark:block"
                    src="https://tailark.com/_next/image?url=%2Fdark-card.webp&w=3840&q=75"
                    alt="AG LABS dashboard dark"
                    width={2880}
                    height={2074}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGOS / TECH STACK (exact hero-section-9 partners structure) ── */}
        <section className="bg-background relative z-10 py-16">
          <div className="m-auto max-w-5xl px-6">
            <h2 className="text-center text-lg font-medium text-muted-foreground">
              Your favorite companies are our partners.
            </h2>
            <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
              <img
                className="h-5 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/openai.svg"
                alt="OpenAI"
                height="20"
                width="auto"
              />
              <img
                className="h-5 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="NVIDIA"
                height="20"
                width="auto"
              />
              <img
                className="h-4 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="GitHub"
                height="16"
                width="auto"
              />
              <img
                className="h-5 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/vercel.svg"
                alt="Vercel"
                height="20"
                width="auto"
              />
              <img
                className="h-5 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/zapier.svg"
                alt="Zapier"
                height="20"
                width="auto"
              />
              <img
                className="h-4 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/laravel.svg"
                alt="Laravel"
                height="16"
                width="auto"
              />
              <img
                className="h-5 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                alt="Lemon Squeezy"
                height="20"
                width="auto"
              />
              <img
                className="h-4 w-fit dark:invert opacity-70 hover:opacity-100 transition-opacity"
                src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
                alt="Tailwind CSS"
                height="16"
                width="auto"
              />
            </div>
          </div>
        </section>

        {/* ── 4 PILLARS ── */}
        <section id="pilares" className="bg-background relative z-10 py-24 border-t border-dashed">
          <div className="m-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
                What we do
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Everything you need to build
                <br className="hidden sm:block" />
                <span className="text-muted-foreground"> better products, faster</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-dashed rounded-xl overflow-hidden">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-background p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-200"
                  data-testid={`pillar-${index}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                      <pillar.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                    </div>
                    <h3 className="font-semibold text-base">{pillar.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="processo" className="bg-white dark:bg-zinc-950 relative z-10 py-24 border-t border-dashed">
          <div className="m-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
                How it works
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Simple, streamlined process
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base">
                Officiis laudantium excepturi ducimus rerum dignissimos and tempora nam vitae excepturi ducimus.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-border z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 text-center" data-testid={`step-${index}`}>
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-dashed bg-background mx-auto mb-5">
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2 block">
                      {step.number}
                    </span>
                    <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section id="produtos" className="bg-background relative z-10 py-24 border-t border-dashed">
          <div className="m-auto max-w-5xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-3">
                Products
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Built for teams that move fast
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  emoji: "⚡",
                  title: "Product one",
                  subtitle: "Subtitle goes here",
                  description: "Officiis laudantium excepturi ducimus rerum dignissimos, and tempora nam vitae, excepturi ducimus iste provident.",
                  features: ["Feature alpha", "Feature beta", "Feature gamma"],
                },
                {
                  emoji: "🔮",
                  title: "Product two",
                  subtitle: "Subtitle goes here",
                  description: "Tempora nam vitae officiis laudantium excepturi ducimus rerum dignissimos iste provident dolores sit amet.",
                  features: ["Feature alpha", "Feature beta", "Feature gamma"],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="border border-dashed rounded-xl p-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors duration-200"
                  data-testid={`product-${index}`}
                >
                  <span className="text-3xl mb-4 block">{product.emoji}</span>
                  <h3 className="font-semibold text-xl mb-1">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.subtitle}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border border-dashed text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT CTA ── */}
        <section id="contato" className="bg-white dark:bg-zinc-950 relative z-10 py-24 border-t border-dashed">
          <div className="m-auto max-w-5xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold md:text-4xl mb-6">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Officiis laudantium excepturi ducimus rerum dignissimos and tempora nam vitae excepturi ducimus iste provident.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  data-testid="button-contact-primary"
                >
                  <a href="#">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get in touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  data-testid="button-contact-secondary"
                >
                  <a href="#">
                    <HeadphonesIcon className="w-4 h-4 mr-2" />
                    View docs
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-background border-t border-dashed py-10">
          <div className="m-auto max-w-5xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <Logo />
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Your Brand. All rights reserved.
              </p>
              <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                {menuItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const el = document.querySelector(item.href)
                      if (el) el.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="hover:text-foreground transition-colors duration-150"
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
