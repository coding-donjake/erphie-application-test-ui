import "./style.scss";

interface ScreenProps {
  leftPanel?: React.ReactNode;
  content?: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({ leftPanel, content }) => {
  return (
    <div className="erphie-screen">
      {leftPanel}
      {content}
      <div className="erphie-screen-right-panel"></div>
    </div>
  );
};

export default Screen;
