
export const Section = ({ dynamicPaddingValues="24px 12px", children, className="" }) => {

  return (
    <section className={`${className} contained-section`}>
      <div 
        className="full-space padded-container" 
        style={{ "--container-padding": dynamicPaddingValues }}
      >
        { children }
      </div>
    </section>
  )
}