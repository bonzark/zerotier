import { PriceTemplate } from "@/web/components";

export const Pricing = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <PriceTemplate
        variant="white"
        title="Basic"
        subtitle="For Everyone / ZeroTier Hosted Controller"
        buttonText="Free Sign Up"
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
    </div>
  );
};
