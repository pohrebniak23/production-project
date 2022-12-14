import classNames from 'classnames';
import { memo, ReactNode } from 'react';
import styles from './Text.module.scss';

export type TextTheme = 'default' | 'error' | 'modal';

export type TextSize = 'extra-small' | 'small' | 'medium' | 'large';

interface TextProps {
  className?: string;
  theme?: TextTheme;
  size?: TextSize;
  children: ReactNode;
}

export const Text = memo(
  ({ className, theme = 'default', size = 'small', children }: TextProps) => {
    return (
      <p
        className={classNames(
          className,
          styles.text,
          styles[theme],
          styles[size],
        )}
      >
        {children}
      </p>
    );
  },
);
