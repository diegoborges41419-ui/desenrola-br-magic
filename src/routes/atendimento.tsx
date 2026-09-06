import { createFileRoute, Link } from "@tanstack/react-router";

type AtendimentoSearch = { cpf: string };

export const Route = createFileRoute("/atendimento")({
  validateSearch: (search: Record<string, unknown>): AtendimentoSearch => ({
    cpf: typeof search["cpf"] === "string" ? search["cpf"] : "",
  }),

  head: () => ({
    meta: [
      { title: "Atendimento — Desenrola Brasil" },
      {
        name: "description",
        content:
          "Atendimento do Programa Desenrola Brasil: acompanhe a consulta do seu CPF e a renegociação das suas dívidas.",
      },
      { property: "og:title", content: "Atendimento — Desenrola Brasil" },
      {
        property: "og:description",
        content: "Acompanhe sua consulta e a renegociação das suas dívidas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AtendimentoPage,
});

function maskCpf(cpf: string) {
  if (!cpf || cpf.length !== 11) return "—";
  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(9)}`;
}

function AtendimentoPage() {
  const { cpf } = Route.useSearch();

  return (
    <div className="min-h-screen bg-muted">
      <div className="mx-auto w-full max-w-[520px] bg-card">
        <header className="flex items-center justify-between border-b border-border px-5 py-3">
          <img src="/images/logo-portal.png" alt="gov.br" className="h-6 w-auto" />
        </header>

        <main className="px-5 pb-10 pt-6">
          <img
            src="/images/programa-logo.png"
            alt="Limpe seu Nome e Desenrola Brasil"
            className="mx-auto h-24 w-auto"
          />

          <h1 className="mt-6 text-center text-2xl font-bold text-primary">Atendimento</h1>

          <div className="mt-4 border-l-4 border-accent bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground">
            ✅ CPF <strong>{maskCpf(cpf)}</strong> recebido. Um atendente do Programa Desenrola
            Brasil vai dar continuidade à sua renegociação.
          </div>

          <div className="mt-6 rounded-lg bg-secondary px-4 py-4 text-sm leading-relaxed text-foreground">
            ℹ️ Mantenha seus dados em mãos. As condições e os descontos de até 99% são apresentados
            durante o atendimento.
          </div>

          <Link
            to="/cpf"
            className="mt-6 block w-full rounded-full border border-input bg-background px-6 py-3 text-center text-base font-bold text-primary transition-colors hover:bg-secondary"
          >
            Consultar outro CPF
          </Link>

          <div className="mt-6 flex justify-center gap-6 text-xs text-foreground">
            <span>🔒 Conexão segura</span>
            <span>🛡️ Programa oficial</span>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Sistema de Renegociação — Todos os direitos reservados
          </p>
        </main>
      </div>

      <footer className="mx-auto w-full max-w-[520px] bg-primary px-6 py-8 text-primary-foreground">
        <p className="text-xl font-bold">gov.br</p>
        <p className="mt-3 text-xs">Todo o conteúdo deste site está publicado sob a licença</p>
        <p className="mt-1 text-xs font-bold">
          Sistema de Renegociação — Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
}
