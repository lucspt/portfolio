
export const Header = ({ text, size="var(--font-large)", className="", children }) => {


  return (
    <header className={className}>
      <p style={{ fontSize: size, fontWeight: 900 }}>{ text }</p>
      { children }
    </header>
  )

}