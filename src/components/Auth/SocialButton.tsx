import React from "react";
interface SocialButtonProps {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
  bgColor: string;
  icon: React.ReactNode;
}
const SocialButton = ({
  onClick,
  disabled,
  ariaLabel,
  bgColor,
  icon,
}: SocialButtonProps) => {
  return (
    <button
      type="button"
      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgColor} flex justify-center items-center text-white transition-transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};

export default SocialButton;
