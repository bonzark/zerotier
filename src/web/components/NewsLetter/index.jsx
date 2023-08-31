export const NewsLetter = () => {
  return (
    <>
      <div className="px-4 lg-px-0">
        <div className="max-w-[1216px] mx-auto bg-[#000] rounded-3xl ">
          <div className="flex flex-col sm:flex-row gap-4 p-9 ">
            <div className="text-left text-[#fff]">
              <div className="mb-0 text-2xl tracking-wide">
                Newsletter Signup
              </div>
              <div className="mb-2 text-lg tracking-wide">
                Join over 300,000 community members worldwide and receive the
                latest news from Team ZeroTier.
              </div>
            </div>
            <div className="sm:w-[380px]">
              <form>
                <div className="flex sm:flex-row float-right pt-0 sm:pt-9 gap-4 mb-0">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-[50px] w-60 p-4 rounded-lg"
                  />
                  <button className="bg-[#FFB441] text-[#000] rounded-3xl px-4 py-2 border-[#FFB441] border-2 border-solid">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
