import "./style.scss";

interface ScreenProps {
  leftPanel?: React.ReactNode;
  children?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ leftPanel, children }) => {
  return (
    <div className="erphie-screen">
      {leftPanel}
      {children}
      <div className="erphie-screen-right-panel"></div>
    </div>
  );
};

export default Screen;
