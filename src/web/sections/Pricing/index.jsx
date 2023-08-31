import { PriceTemplate, SectionTitle } from "@/web/components";
import { pricingData } from "@/web/constants";

export const Pricing = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-8">
      <div className="py-8">
        <SectionTitle>{pricingData.title}</SectionTitle>
        <p className="mb-4 text-[18px] text-center">{pricingData.subtitle}</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8">
        {pricingData.templates.map((template, index) => (
          <PriceTemplate
            variant={template.variant}
            title={template.title}
            subtitle={template.subtitle}
            buttonText={template.button.text}
            key={`template-${index}`}
          >
            <div>
              {template.bullets.map((bullet, bulletIndex) => (
                <p
                  key={`${template.title}-${index}${bulletIndex}`}
                  className="my-[18px]"
                >
                  {bullet}
                </p>
              ))}
            </div>
          </PriceTemplate>
        ))}
      </div>
    </div>
  );
};
