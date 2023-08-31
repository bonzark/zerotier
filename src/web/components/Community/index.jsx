import { Button } from "..";

export const Community = () => {
  return (
    <>
      <div className="px-4 xl:px-0 mb-6">
        <div className="max-w-[1216px] mx-auto bg-[#262626] rounded-3xl">
          <div className="flex flex-col p-8 rounded-3xl">
            <div className="mb-4 text-3xl">
              Open Source Community Edition
            </div>
            <div className="text-xl">
              <p className="my-5">
                Featuring unlimited nodes, networks, and admins. Self-hosted.
                Designed for non-Commercial Use cases.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row float-left my-2 gap-4 items-center">
              <Button invert variant={"white"} className="px-4 py-2">
                ZeroTier GitHub
              </Button>
              <div className="hover:text-[#ffb441] text-xl">
                Read Documentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
