interface ContentProps {
  appBar?: React.ReactNode;
  content?: React.ReactNode[];
}

const Content: React.FC<ContentProps> = ({ appBar, content }) => {
  return (
    <div className="erphie-screen-content">
      {appBar}
      <div className="erphie-screen-content-wrap">{content}</div>
    </div>
  );
};

export default Content;
