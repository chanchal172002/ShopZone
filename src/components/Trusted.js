import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://blog.hubspot.com/hubfs/image8-2.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.etimg.com/thumb/msid-59738998,width-640,resizemode-4,imgsize-65961/pepsi.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFW96swNq0rvSHBR3j09vKkCIDbMu4g5bPKHs9OGgkq2shf8Ls4VcDXbzXSTrV18lrknE&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
         
          <div className="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;
