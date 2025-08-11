interface AppBarProps {
  children: React.ReactNode;
}

const AppBar: React.FC<AppBarProps> = ({ children }) => {
  return <div className="erphie-screen-content-app-bar">{children}</div>;
};

export default AppBar;
