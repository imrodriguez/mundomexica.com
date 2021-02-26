const Section = ({ children, center }) => (
  <div style={{
    textAlign: center ? 'center' : 'left',
    padding: '2rem 0'
  }}
  center={center}>{children}</div>
);

export { Section };
