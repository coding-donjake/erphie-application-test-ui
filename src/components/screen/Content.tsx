interface ContentProps {
  appBar?: React.ReactNode;
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ appBar, children }) => {
  return (
    <div className="erphie-screen-content">
      {appBar}
      <div className="erphie-screen-content-wrap">{children}</div>
    </div>
  );
};

export default Content;
