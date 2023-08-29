export const Button = (props) => {
  const buttonConfig = {
    yellow: {
      bgColor: "bg-[#ffb441] hover:bg-transparent",
      color: "text-[#1a1a1a] hover:text-[#ffb441]",
      border: "border-[#ffb441] rounded-[64px] border-2",
    },
    white: {
      bgColor: "bg-[#fff] hover:bg-transparent",
      color: "text-[#1a1a1a] hover:text-[#fff]",
      border: "border-[#fff] rounded-[64px] border-2",
    },
    purple: {
      bgColor: "bg-[#4436ca] hover:bg-transparent",
      color: "text-[#fff]",
      border: "border-[#4436ca] rounded-[64px] border-2",
    },
    ghost: {
      bgColor: "bg-transparent hover:bg-[#1a1a1a]",
      color: "text-[#fff] hover:text-[#ffb441]",
      border: "border-0 rounded-[64px]",
    },
  };

  const buttonInvertConfig = {
    yellow: {
      bgColor: "bg-transparent hover:bg-[#ffb441]",
      color: "text-[#ffb441] hover:text-[#1a1a1a]",
      border: "border-[#ffb441] rounded-[64px] border-2",
    },
    white: {
      bgColor: "bg-transparent hover:bg-[#fff]",
      color: "text-[#fff] hover:text-[#1a1a1a]",
      border: "border-[#fff] rounded-[64px] border-2",
    },
    purple: {
      bgColor: "bg-transparent hover:bg-[#4436ca]",
      color: "text-[#fff]",
      border: "border-[#4436ca] rounded-[64px] border-2",
    },
    ghost: {
      bgColor: "bg-transparent hover:bg-[#1a1a1a]",
      color: "text-[#fff] hover:text-[#ffb441]",
      border: "border-0 rounded-[64px]",
    },
  };

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      name={props.name}
      id={props.id}
      className={` transition-all duration-300 py-[8px] px-[16px] text-[20px] font-medium leading-none ${
        !props.invert
          ? `${buttonConfig[props.varient].bgColor} ${
              buttonConfig[props.varient].color
            } ${buttonConfig[props.varient].border}`
          : `${buttonInvertConfig[props.varient].bgColor} ${
              buttonInvertConfig[props.varient].color
            } ${buttonInvertConfig[props.varient].border}`
      }`}
    >
      {props.children}
    </button>
  );
};
