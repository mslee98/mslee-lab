import AppIcon from "./AppIcon";

const styles = {
  container: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    padding: '0 10px',
  }
};


export default function AppContent({ apps, onSelectApp }) {
  const appEntries = Object.entries(apps).filter(
    ([key, app]) => key !== 'home' && app.icon
  );

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {appEntries.map(([key, app]) => (
          <AppIcon
            key={key}
            app={app}
            onClick={() => onSelectApp(key)}
          />
        ))}
      </div>
    </div>
  );
}
