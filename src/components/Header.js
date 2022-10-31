const Header = () => {
  const headerStyle = {
    padding: '20px 0',
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: '600',
          marginBottom: '2rem',
          lineHeight: '1em',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        TODO List
      </h1>
    </header>
  );
};

export default Header;
