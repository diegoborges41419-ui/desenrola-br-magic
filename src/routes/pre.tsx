import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pre")({
  head: () => ({
    meta: [
      { title: "Desenrola Brasil — Renegocie suas dívidas com até 99% de desconto" },
      {
        name: "description",
        content:
          "O Programa Desenrola Brasil possibilita a renegociação de dívidas com descontos de até 99%. Acesse a plataforma e consulte pelo CPF.",
      },
      { property: "og:title", content: "Desenrola Brasil — Renegocie suas dívidas" },
      {
        property: "og:description",
        content:
          "Renegociação de dívidas com descontos de até 99%. Acesse a plataforma oficial do Programa Desenrola Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-muted py-0 sm:py-8">
      <main className="mx-auto w-full max-w-[520px] bg-card">
        <img
          src="/images/pre-banner.png"
          alt="Pessoa acessando a plataforma Desenrola Brasil pelo celular"
          className="w-full"
        />

        <div className="rounded-b-2xl bg-card px-6 pb-10 pt-8 text-center">
          <img
            src="/images/parceiro-logo.png"
            alt="Desenrola Brasil"
            className="mx-auto h-20 w-auto"
          />

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight">
            <span className="block text-primary">DESENROLA</span>
            <span className="block text-accent">BRASIL</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[22rem] text-lg font-bold leading-relaxed text-primary">
            O Programa Desenrola Brasil possibilita a renegociação de dívidas com descontos de até
            99%
          </p>

          <p className="mx-auto mt-5 max-w-[18rem] text-base leading-relaxed text-foreground">
            Clique no botão abaixo para acessar a plataforma
          </p>

          <a
            href="https://desenrolasbr2026.com/cpf"
            className="mt-8 block w-full rounded-xl bg-primary px-6 py-4 text-xl font-bold tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ACESSAR AGORA
          </a>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-[520px] bg-card px-6 pb-10 pt-6 text-center">
        <div className="flex justify-center gap-8 text-sm font-bold text-primary">
          <a href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          INARA SUED NASCIMENTO COSTA
          <br />
          Q CLS 4 BLOCO A (COMERCIO), LJ 02, LOTE 02,
          <br />
          RIACHO FUNDO I, BRASÍLIA - DF, CEP 71820-511,
          <br />
          BRASIL
          <br />
          CNPJ: 05.475.756/0001-00
        </p>
      </footer>
    </div>
  );
}
