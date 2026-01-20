import { memo, useCallback } from "react";

const styles = {
  button: (active) => ({
    padding: "10px 16px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    background: active ? "#000" : "#e5e7eb",
    color: active ? "#fff" : "#111",
  }),
};

const DeviceMenuButton = memo(function DeviceMenuButton({
  active,
  value,
  onClick,
  children,
}) {
const handleClick = useCallback(() => {
    onClick(value);
    }, [onClick, value]);
  return (
    <button style={styles.button(active)} onClick={handleClick}>
      {children}
    </button>
  );
});

export default DeviceMenuButton;
