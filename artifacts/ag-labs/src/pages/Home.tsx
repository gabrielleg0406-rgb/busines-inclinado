import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AgLabsLogo } from "@/components/AgLabsLogo";
import {
  Menu,
  X,
  Brain,
  Bot,
  Zap,
  BarChart3,
  Database,
  Network,
  MessageSquare,
  TrendingUp,
  HeadphonesIcon,
  Shuffle,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { name: "Pilares", href: "#pilares" },
  { name: "Como Funciona", href: "#processo" },
  { name: "Produtos", href: "#produtos" },
  { name: "Contato", href: "#contato" },
];

const pillars = [
  {
    icon: Brain,
    title: "Infraestrutura de IA",
    color: "from-violet-500 to-indigo-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-100",
    items: ["Arquitetura", "Banco de dados", "Orquestração"],
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    color: "from-blue-500 to-cyan-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-100",
    items: ["Atendimento", "Vendas", "Suporte"],
  },
  {
    icon: Zap,
    title: "Automação",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-100",
    items: ["Processos internos", "Integração de sistemas"],
  },
  {
    icon: BarChart3,
    title: "Produtos & SaaS",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-100",
    items: ["Barber PRO", "APP AG LABS (mídia generativa)"],
  },
];

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "Diagnóstico do negócio",
    description:
      "Mapeamos seus processos, gargalos e oportunidades de automação para entender onde a IA gera mais valor.",
    color: "text-violet-600",
    bgColor: "bg-violet-50 dark:bg-violet-950/40",
    borderColor: "border-violet-200 dark:border-violet-800",
  },
  {
    number: "02",
    icon: Network,
    title: "Arquitetura da solução",
    description:
      "Desenhamos a arquitetura técnica ideal: modelos, fluxos de dados, integrações e infraestrutura escalável.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/40",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    number: "03",
    icon: Layers,
    title: "Implementação",
    description:
      "Desenvolvemos e implantamos os sistemas com agilidade, testes rigorosos e foco em resultados mensuráveis.",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/40",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Operação e evolução",
    description:
      "Monitoramos continuamente, otimizamos modelos e evoluímos a solução conforme seu negócio cresce.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/40",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
];

const products = [
  {
    title: "Barber PRO",
    subtitle: "SaaS para barbearias",
    description:
      "Sistema completo de gestão para barbearias: agendamento inteligente, fidelização de clientes e automação de marketing.",
    gradient: "from-violet-600 to-indigo-700",
    features: ["Agendamento online", "Fidelização automatizada", "Relatórios IA"],
    icon: "✂️",
  },
  {
    title: "APP AG LABS",
    subtitle: "Mídia generativa",
    description:
      "Plataforma de geração de conteúdo com IA: textos, imagens, vídeos e áudios para marketing e criação digital.",
    gradient: "from-blue-600 to-cyan-700",
    features: ["Geração de conteúdo", "Multi-formato", "API-first"],
    icon: "🎨",
  },
];

export default function Home() {
  const [menuState, setMenuState] = React.useState(false);

  const handleNavClick = (href: string) => {
    setMenuState(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          data-state={menuState ? "active" : undefined}
          className="group w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
        >
          <div className="m-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 py-4 lg:gap-0">
              <div className="flex w-full justify-between lg:w-auto">
                <a href="/" aria-label="AG LABS home" className="flex items-center">
                  <AgLabsLogo />
                </a>
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Fechar menu" : "Abrir menu"}
                  className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                  data-testid="button-mobile-menu"
                >
                  <Menu
                    className={cn(
                      "m-auto size-6 transition-all duration-200",
                      menuState && "rotate-180 scale-0 opacity-0"
                    )}
                  />
                  <X
                    className={cn(
                      "absolute inset-0 m-auto size-6 transition-all duration-200",
                      menuState
                        ? "rotate-0 scale-100 opacity-100"
                        : "-rotate-180 scale-0 opacity-0"
                    )}
                  />
                </button>
              </div>

              <div
                className={cn(
                  "bg-background mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-2xl border p-6 shadow-lg md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none",
                  menuState ? "flex" : "hidden lg:flex"
                )}
              >
                <div className="lg:pr-4">
                  <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-muted-foreground hover:text-foreground block duration-150 font-medium"
                          data-testid={`nav-link-${item.name.toLowerCase()}`}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleNavClick("#contato")}
                    data-testid="button-cta-nav"
                    className="bg-violet-600 hover:bg-violet-700 text-white border-0"
                  >
                    Falar com especialista
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main>
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 w-[60rem] h-[60rem] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute top-20 right-0 w-[40rem] h-[40rem] rounded-full bg-blue-600/8 blur-[100px]" />
        </div>

        <section className="relative overflow-hidden bg-background pt-32 pb-20 lg:pt-36 lg:pb-28">
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 dark:bg-violet-950/40 border border-violet-200 dark:border-violet-800 px-4 py-1.5 text-sm font-medium text-violet-700 dark:text-violet-300 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600" />
                </span>
                Agência de Inteligência Artificial
              </div>

              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl font-serif">
                Sistemas de IA que{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                  automatizam, escalam
                </span>{" "}
                e operam negócios
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                Automações, agentes inteligentes, SaaS e sistemas sob medida para empresas
                que querem crescer com eficiência.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={() => handleNavClick("#contato")}
                  data-testid="button-hero-cta-primary"
                  className="bg-violet-600 hover:bg-violet-700 text-white border-0 px-8 h-12 text-base font-semibold rounded-xl shadow-lg shadow-violet-500/30"
                >
                  Falar com especialista
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handleNavClick("#pilares")}
                  data-testid="button-hero-cta-secondary"
                  className="h-12 px-8 text-base rounded-xl"
                >
                  Ver como funciona
                </Button>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Implementações em produção</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Suporte contínuo</span>
                </div>
                <div className="hidden md:flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Resultados mensuráveis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative z-10 mx-auto mt-20 max-w-6xl px-6">
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="p-8 bg-gradient-to-br from-violet-950 via-indigo-950 to-blue-950 min-h-[320px] flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
                  {[
                    { icon: Brain, label: "IA Infrastructure", value: "100%", color: "text-violet-400" },
                    { icon: Bot, label: "Active Agents", value: "24/7", color: "text-blue-400" },
                    { icon: Zap, label: "Automations", value: "∞", color: "text-amber-400" },
                    { icon: TrendingUp, label: "Growth", value: "+300%", color: "text-emerald-400" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      data-testid={`stat-card-${i}`}
                    >
                      <stat.icon className={cn("w-6 h-6", stat.color)} />
                      <span className={cn("text-2xl font-bold font-serif", stat.color)}>
                        {stat.value}
                      </span>
                      <span className="text-xs text-white/50 text-center">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Terminal-like bottom bar */}
              <div className="px-6 py-3 bg-zinc-950 border-t border-white/5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-white/30 ml-2 font-mono">
                  ag-labs-core — production environment
                </span>
                <div className="ml-auto flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400/70 font-mono">running</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pilares" className="relative z-10 bg-background py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">
                O que fazemos
              </p>
              <h2 className="text-3xl font-bold font-serif md:text-4xl">
                Construímos a infraestrutura de IA
                <br />
                <span className="text-muted-foreground font-normal">por trás de empresas modernas</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                    pillar.borderColor,
                    "bg-card"
                  )}
                  data-testid={`pillar-card-${index}`}
                >
                  <div className={cn("inline-flex rounded-xl p-3 mb-5", pillar.bgLight)}>
                    <div className={cn("rounded-lg bg-gradient-to-br p-2", pillar.color)}>
                      <pillar.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-serif mb-4">{pillar.title}</h3>

                  <ul className="space-y-2.5">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-violet-500 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="processo" className="relative py-24 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">
                Como funciona
              </p>
              <h2 className="text-3xl font-bold font-serif md:text-4xl">
                Do diagnóstico à operação
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Um processo estruturado para entregar soluções de IA que realmente funcionam no seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative" data-testid={`step-card-${index}`}>
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[-50%] h-px border-t border-dashed border-border z-0" />
                  )}

                  <div
                    className={cn(
                      "relative z-10 rounded-2xl border p-6 h-full transition-all duration-300 hover:shadow-md",
                      step.bgColor,
                      step.borderColor
                    )}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className={cn("rounded-xl p-2.5", "bg-white dark:bg-white/10")}>
                        <step.icon className={cn("w-5 h-5", step.color)} />
                      </div>
                      <span className={cn("text-4xl font-black font-serif opacity-20", step.color)}>
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-2 font-serif">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="produtos" className="relative py-24 bg-background">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-widest mb-3">
                Produtos
              </p>
              <h2 className="text-3xl font-bold font-serif md:text-4xl">
                SaaS desenvolvidos pela AG LABS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  data-testid={`product-card-${index}`}
                >
                  <div className={cn("bg-gradient-to-br p-8 min-h-[200px] flex items-end", product.gradient)}>
                    <div>
                      <span className="text-4xl mb-3 block">{product.icon}</span>
                      <h3 className="text-2xl font-bold text-white font-serif">{product.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{product.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-card">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground font-medium"
                        >
                          <CheckCircle2 className="w-3 h-3 text-violet-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / CONTACT */}
        <section id="contato" className="relative py-24 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-12 md:p-16 text-center shadow-2xl">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl translate-x-1/2 translate-y-1/2" />
              </div>

              <div className="relative z-10">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-4">
                  Pronto para começar?
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
                  Vamos construir sua
                  <br />
                  infraestrutura de IA juntos
                </h2>
                <p className="text-white/70 max-w-lg mx-auto mb-10 leading-relaxed">
                  Entre em contato e descubra como a AG LABS pode transformar seus processos com
                  inteligência artificial sob medida para o seu negócio.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-contact-whatsapp"
                    className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-8 py-3 rounded-xl hover:bg-white/90 transition-colors duration-200 text-sm shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Falar no WhatsApp
                  </a>
                  <a
                    href="mailto:contato@aglabs.ai"
                    data-testid="button-contact-email"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/20 transition-colors duration-200 text-sm"
                  >
                    <HeadphonesIcon className="w-4 h-4" />
                    Enviar email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-background border-t border-border py-12">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <AgLabsLogo />
              <p className="text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} AG LABS. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <button onClick={() => handleNavClick("#pilares")} className="hover:text-foreground transition-colors">
                  Pilares
                </button>
                <button onClick={() => handleNavClick("#processo")} className="hover:text-foreground transition-colors">
                  Processo
                </button>
                <button onClick={() => handleNavClick("#contato")} className="hover:text-foreground transition-colors">
                  Contato
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
