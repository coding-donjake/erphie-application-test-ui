interface LeftPanelProps {
  logo?: string;
  logoAlt?: string;
  navigations?: React.ReactNode[];
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  logo,
  logoAlt,
  navigations,
}) => {
  return (
    <div className="erphie-screen-left-panel">
      {logo ? (
        <img
          className="erphie-screen-left-panel-logo"
          src={logo}
          alt={logoAlt}
        />
      ) : null}
      <div className="erphie-screen-left-panel-navigation">{navigations}</div>
    </div>
  );
};

export default LeftPanel;
