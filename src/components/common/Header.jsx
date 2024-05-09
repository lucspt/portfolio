
export const Header = ({ text, size="var(--font-large)", className }) => {


  return (
    <header className={className}>
      <p style={{ fontSize: size, fontWeight: 900 }}>{ text }</p>
    </header>
  )

}