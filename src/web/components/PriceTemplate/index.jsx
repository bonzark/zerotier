import { Button } from "..";

export const PriceTemplate = ({
  variant,
  title,
  subtitle,
  buttonText,
  children,
}) => {
  const templateConfig = {
    yellow: {
      border: "border-2 border-[#ffb441]",
      icon: "https://images.ctfassets.net/upz5g6ntpb42/1XN3EyIzR41eiFlLxV9d9r/fcbb8de144d47784503a170271009838/orange-knockout-512x512-v2.png?w=512&h=512&q=80&fm=webp",
    },
    white: {
      border: "border-2 border-[#fff]",
      icon: "https://images.ctfassets.net/upz5g6ntpb42/7v4ThcbFmH16fgyJSNLC0h/f71e4818e79188ab8c3d0015c580138f/white-knockout-512x512-v2.png?w=512&h=512&q=80&fm=webp",
    },
    purple: {
      border: "border-2 border-[#4436ca]",
      icon: "https://images.ctfassets.net/upz5g6ntpb42/7KqRPHmV146lLhHHV68xvj/66c68b5561c19e3e11303d8e49af3b42/blue-knockout-512x512-v2.png?w=512&h=512&q=80&fm=webp",
    },
  };
  return (
    <div
      className={`bg-[#262626] py-8 px-4 rounded-3xl grow basis-0 flex flex-col justify-between ${templateConfig[variant].border}`}
    >
      <div>
        <img
          src={templateConfig[variant].icon}
          alt={`${variant}-icon`}
          className="mb-4 mx-auto max-w-[64px] h-auto"
        />
        <span className="text-[30px] font-semibold mb-4 block text-center">
          {title}
        </span>
        <span className="text-[18px] font-normal mb-4 block text-center">
          {subtitle}
        </span>
        <div className="w-full text-center mb-8">{children}</div>
      </div>
      <div className="my-2 block text-center">
        <Button variant={variant} type="button">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
