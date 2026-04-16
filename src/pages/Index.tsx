import { useState } from "react";
import SelectableTable from "@/components/SelectableTable";
import Checkbox from "@/components/Checkbox";
import { Modal, ModalHeader, ModalFooter } from "@/components/Modal";

const features = [
  {
    title: "Zero Dependências",
    description: "Construído apenas com React e Tailwind CSS. Sem bibliotecas externas pesadas.",
    icon: "⚡",
  },
  {
    title: "Totalmente Customizável",
    description: "Tokens de design semânticos que se adaptam ao seu tema com facilidade.",
    icon: "🎨",
  },
  {
    title: "Acessível",
    description: "Componentes seguem as melhores práticas de acessibilidade com suporte a teclado.",
    icon: "♿",
  },
  {
    title: "TypeScript Nativo",
    description: "Tipagem completa para autocompletar e segurança no desenvolvimento.",
    icon: "🛡️",
  },
  {
    title: "Leve e Rápido",
    description: "Bundle mínimo para máxima performance na sua aplicação.",
    icon: "🚀",
  },
  {
    title: "Composável",
    description: "Componentes modulares que se encaixam como peças de um quebra-cabeça.",
    icon: "🧩",
  },
];

const Index = () => {
  const [demoChecked, setDemoChecked] = useState(false);
  const [demoIndet, setDemoIndet] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">ReactUI</span>
          <nav className="hidden sm:flex gap-6 text-sm text-muted-foreground">
            <a href="#componentes" className="hover:text-foreground transition-colors">Componentes</a>
            <a href="#features" className="hover:text-foreground transition-colors">Recursos</a>
            <a href="#demo" className="hover:text-foreground transition-colors">Demo</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wide">
          v1.0 — Open Source
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Componentes React <br className="hidden sm:block" />
          <span className="text-primary">sem dependências</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Uma biblioteca de componentes de UI construída apenas com React e Tailwind CSS. 
          Leve, acessível e totalmente customizável.
        </p>
        <div className="flex gap-3 justify-center pt-4">
          <a
            href="#demo"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Ver Demo
          </a>
          <a
            href="#componentes"
            className="inline-flex items-center px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
          >
            Componentes
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-center mb-12">Por que usar ReactUI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card p-6 space-y-3 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{f.icon}</span>
                <h3 className="font-semibold text-card-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components showcase */}
      <section id="componentes" className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Componentes Disponíveis</h2>
            <p className="text-muted-foreground">Explore os componentes prontos para usar no seu projeto.</p>
          </div>

          {/* Checkbox showcase */}
          <div className="rounded-lg border border-border bg-card p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground">Checkbox</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Suporta estados checked, unchecked e indeterminado. Sem bibliotecas externas.
              </p>
            </div>
            <div className="flex flex-wrap gap-8 items-center">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox
                  checked={demoChecked}
                  onChange={() => setDemoChecked(!demoChecked)}
                />
                Normal
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox checked={false} indeterminate={demoIndet} onChange={() => setDemoIndet(!demoIndet)} />
                Indeterminado
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <Checkbox checked disabled onChange={() => {}} />
                Desabilitado
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Table Demo */}
      <section id="demo" className="border-t border-border bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Tabela Selecionável</h2>
            <p className="text-muted-foreground">
              Seleção individual e em massa com checkbox no cabeçalho e estado indeterminado.
            </p>
          </div>
          <SelectableTable />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-6">
          <h2 className="text-3xl font-bold">Comece a usar agora</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Copie os componentes para o seu projeto e customize como quiser. Sem instalação, sem lock-in.
          </p>
          <code className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-mono">
            npx reactui-lib init
          </code>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2026 ReactUI. Código aberto sob licença MIT.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Documentação</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
