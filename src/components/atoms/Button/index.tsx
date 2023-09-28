import clsx from 'clsx';
import { forwardRef } from 'react';

interface ButtonOptions {
  /**
   * Button display variants
   * @default "solid"
   * @type ButtonVariant
   */
  variant?: ButtonVariant;
}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

type ButtonVariant =
  | 'baby-blue'
  | 'solid'
  | 'green-primary'
  | 'green-secondary'
  | 'dark'
  | 'circle';

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'baby-blue':
      return 'py-3 flex gap-3 bg-[#BAD7E9] text-dark-primary rounded-full px-8 md:hover:bg-yellow-color md:hover:text-green-primary md:transition-all md:duration-500 md:ease-in-out';
    case 'green-primary':
      return 'py-3 px-8 rounded-full bg-green-primary text-yellow-color lg:hover:shadow-yellow-red-blues shadow-yellow-red-blues lg:shadow-none lg:transition-all lg:ease-in-out lg:duration-700';
    case 'green-secondary':
      return 'bg-green-secondary px-8 py-2 rounded-[30px] text-white-color hover:bg-green-primary hover:text-yellow-color transition-all ease-in-out duration-300 shadow-md';
    case 'dark':
      return 'py-3 px-8 rounded-full bg-dark-primary text-white-color shadow-6';
    default:
      return undefined;
  }
};

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = 'solid',
    type = 'button',
    className,
    children,
    ...rest
  } = props;

  const merged = clsx(
    'shadow-md font-bold transition-colors justify-center items-center',
    getVariant(variant),
    className
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
