import { PriceTemplate, SectionTitle } from "@/web/components";

export const Pricing = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-8">
      <div className="py-8">
        <SectionTitle>{data.title}</SectionTitle>
        <p className="mb-4 text-[18px] text-center">{data.subtitle}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {data.templates.map((template, index) => (
          <PriceTemplate
            variant={template.variant}
            title={template.title}
            subtitle={template.subtitle}
            buttonText={template.button.text}
            key={`template-${index}`}
          >
            <div>
              <p className="my-[18px]">✓ 1 Admin</p>
              <p className="my-[18px]">✓ 25 Nodes</p>
              <p className="my-[18px]">✓ Unlimited Networks</p>
              <p className="my-[18px]">✖ Business SSO: n/a</p>
              <p className="my-[18px]">✓ Community Support</p>
              <p className="my-[18px]">FREE</p>
            </div>
          </PriceTemplate>
        ))}
      </div>
    </div>
  );
};
