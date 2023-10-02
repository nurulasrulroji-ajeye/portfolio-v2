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

type ButtonVariant = 'primary' | 'light';

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
      return 'py-2 md:py-3 px-6 md:px-8 rounded-full bg-dark-primary text-white-color shadow-6 lg:hover:bg-white-color lg:hover:text-dark-primary lg:transition-all lg:eas-in-out lg:duration-500 lg:shadow-none lg:hover:border lg:hover:border-dark-primary dark:bg-white-color dark:lg:hover:border-white-color dark:lg:hover:bg-dark-primary dark:lg:hover:text-white-color dark:text-dark-primary';
    case 'light':
      return 'py-3 px-8 rounded-full bg-white-color text-dark-primary shadow-6 lg:hover:bg-dark-primary lg:hover:text-white-color lg:transition-all lg:eas-in-out lg:duration-500 lg:shadow-none lg:hover:border lg:hover:border-white-color';
    default:
      return undefined;
  }
};

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    type = 'button',
    className,
    children,
    ...rest
  } = props;

  const merged = clsx(
    'shadow-md font-bold transition-colors justify-center items-center font-serif',
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
