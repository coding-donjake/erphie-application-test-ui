interface LeftPanelProps {
  logo?: string;
  logoAlt?: string;
  children?: React.ReactNode;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ logo, logoAlt, children }) => {
  return (
    <div className="erphie-screen-left-panel">
      {logo ? (
        <img
          className="erphie-screen-left-panel-logo"
          src={logo}
          alt={logoAlt}
        />
      ) : null}
      <div className="erphie-screen-left-panel-navigation">{children}</div>
    </div>
  );
};

export default LeftPanel;
