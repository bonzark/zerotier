import { Button } from "@/web/components";

export const NewsLetter = () => {
  return (
    <div className="py-8 px-4 lg:px-8">
      <div className="max-w-[1216px] mx-auto bg-[#000] rounded-3xl ">
        <div className="grid md:flex sm:flex-row gap-4 p-9 ">
          <div className="text-left text-[#fff]">
            <div className="mb-0 text-2xl tracking-wide">Newsletter Signup</div>
            <div className="mb-2 text-lg tracking-wide">
              Join over 300,000 community members worldwide and receive the
              latest news from Team ZeroTier.
            </div>
          </div>
          <div className="sm:w-auto">
            <form>
              <div className="flex sm:flex-row pt-0 sm:pt-9 gap-4 mb-0">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[50px] w-60 p-4 rounded-lg focus:shadow-[0_0_18px_2px_#ffb441] text-black"
                />
                <Button type="submit" variant="yellow">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
