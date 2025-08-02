interface AppBarProps {
  content?: React.ReactNode[];
}

const AppBar: React.FC<AppBarProps> = ({ content }) => {
  return <div className="erphie-screen-content-app-bar">{content}</div>;
};

export default AppBar;
