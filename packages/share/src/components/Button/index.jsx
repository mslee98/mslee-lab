import { forwardRef, useMemo } from 'react';

const Button = forwardRef(
  (
    {
      type = 'button',
      variant = 'contained',
      color = 'primary',
      text,
      disabled = false,
      testId,
      children,
      style: userStyle,
      ...props
    },
    ref
  ) => {
    // 간단한 색상 테마
    const colors = useMemo(
      () => ({
        primary: '#3ebd93', // mint
        danger: '#ff4d4f',  // red
        default: '#999',     // gray
        white: '#fff',
        gray5: '#ccc',
      }),
      []
    );

    // 공통 스타일
    const baseStyle = {
      color: 'inherit',
      cursor: disabled ? 'default' : 'pointer',
      border: 'none',
      outline: 'none',
      background: 'none',
      borderRadius: 4,
      letterSpacing: -0.4,
      transition: 'opacity 200ms',
      padding: '8px 12px',
      ...(disabled ? { opacity: 0.6 } : {}),
    };

    // variant별 스타일
    const variantStyle =
      variant === 'contained'
        ? {
            color: colors.white,
            backgroundColor: colors[color],
          }
        : {
            color: colors[color],
            border: variant === 'text' ? 'none' : `1px solid ${colors[color]}`,
            backgroundColor: colors.white,
            ...(disabled ? { color: colors.gray5 } : {}),
            padding: variant === 'outlined' ? '7px 9px' : '8px 12px',
          };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        style={{ ...baseStyle, ...variantStyle, ...userStyle }}
        data-testid={testId}
        {...props}
      >
        {children ?? text}
      </button>
    );
  }
);

export default Button;
