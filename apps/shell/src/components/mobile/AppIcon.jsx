import { memo } from 'react';

const styles = {
    icon: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        cursor: 'pointer',
        transition: 'transform 0.2s',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,
    },
    label: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
    },
}

const AppIcon = memo(function AppIcon({ app, onClick }) {
  return (
    <div
      style={styles.icon}
      onClick={onClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={app.icon}
        alt={app.name}
        style={styles.image}
      />
      <span style={styles.label}>{app.name}</span>
    </div>
  );
});

export default AppIcon;
