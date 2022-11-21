import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { Loader } from '../Loader/Loader';
import styles from './Button.module.scss';

export enum ButtonTheme {
  DEFAULT = '',
  MODAL = 'modal',
  CLEAR = 'clear',
  OUTLINE = 'outline',
  SQUARE = 'square',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.DEFAULT,
    size = ButtonSize.MEDIUM,
    children,
    disabled = false,
    isLoading = false,
    ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(
        styles.button,
        className,
        styles[theme],
        styles[size],
        {
          [styles.loading]: isLoading,
        },
      )}
      disabled={disabled}
    >
      {isLoading ? (
        <Loader
          className={styles.btnLoader}
          blockSize={22}
          spinnerSize={22}
          borderDepth={3}
        />
      ) : (
        children
      )}
    </button>
  );
});
