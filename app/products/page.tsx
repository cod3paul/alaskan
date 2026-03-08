import { products, productsPageContent } from "@/content/products";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function ProductsPage() {
  return (
    <>
      <Section className="bg-primary text-primary-foreground pt-24 pb-12 md:pt-28">
        <Container>
          <h1 className="text-display-xl">
            {productsPageContent.hero.heading.text}{" "}
            <span className="text-primary-foreground/80">
              {productsPageContent.hero.heading.highlight}
            </span>
          </h1>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="grid gap-10 md:grid-cols-[min(360px,40%),1fr] items-start border-b border-[var(--color-border-subtle)] pb-10 last:border-none"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-[1.25rem] bg-[var(--color-card-bg)]">
                <img
                  src={product.image}
                  alt={`Alaskan Dumplings ${product.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-4">
                <header className="space-y-2">
                  <h2 className="text-display-md text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </header>

                <dl className="grid gap-3 text-sm rounded-xl bg-[var(--color-section-light)] px-5 py-4">
                  <Row
                    label={productsPageContent.tableLabels.category}
                    value={product.category}
                  />
                  <Row
                    label={productsPageContent.tableLabels.casePack}
                    value={product.casePack.toString()}
                  />
                  <Row
                    label={productsPageContent.tableLabels.caseCost}
                    value={product.caseCost}
                  />
                  <Row
                    label={productsPageContent.tableLabels.unitCost}
                    value={product.unitCostBase}
                  />
                  <Row
                    label={productsPageContent.tableLabels.suggRetail}
                    value={product.suggestedRetail}
                    highlight
                  />
                  <Row
                    label={productsPageContent.tableLabels.gp}
                    value={product.gpPercent}
                    highlight
                  />
                  <Row
                    label={productsPageContent.tableLabels.shelfLife}
                    value={product.shelfLife}
                  />
                  <Row
                    label={productsPageContent.tableLabels.local}
                    value={product.local ? "Yes" : "No"}
                  />
                </dl>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Pill active={product.foodstampAllowable}>Foodstamp ✓</Pill>
                  <Pill active={product.wicEligible}>WIC ✓</Pill>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-gray-600">{label}</dt>
      <dd
        className={
          highlight ? "font-semibold text-primary" : "font-medium text-foreground"
        }
      >
        {value}
      </dd>
    </div>
  );
}

function Pill({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  if (!active) return null;
  return (
    <span className="inline-flex items-center rounded-full bg-[rgba(184,23,23,0.08)] px-3 py-1 text-xs font-display uppercase tracking-[0.22em] text-primary">
      {children}
    </span>
  );
}

