import styled from "styled-components";

// const { poppinsSemiBold, poppinsRegular } = fonts;

// const H1 = styled.h1`
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(36px, 2.5vw, 54px)"};
// `;

// const H2 = styled.h2`
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(20px, 2.2vw, 25px)"};
//   font-family: "Lato", "sans-serif";
//   font-weight: 700;
//   color: #000000;
//   line-height: 1.4;
//   text-transform: capitalize;
// `;

// const H3 = styled.h3`
//   font-size: 21px;
//   font-weight: bold;
//   line-height: 1.2;
//   color: #000000;
//   margin-top: 8px;
//   font-family: "Lato", "sans-serif";
// `;

// const H4 = styled.h4`
//   /* font-family: ${({ fontFamily }) =>
//     fontFamily ? fontFamily : interRegular}; */
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
// `;

/* font-family: ${interSemiBold}; */
// const H5 = styled.h5`
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(18px, 1.2vw, 24px)"};
// `;

// const H6 = styled.h6`
//   font-family: ${({ fontFamily }) =>
//     fontFamily ? fontFamily : interSemiBold};
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
// `;

/* font-family: ${interRegular}; */
const P1 = styled.p`
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : "clamp(12px, 1.1vw, 14px)"};
  font-family: "Open Sans", "sans-serif";
  color: #555555;
  text-align: center;
  letter-spacing: 0.5px;
`;

/* font-family: ${interRegular}; */
// const P2 = styled.p`
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(14px, 1vw, 18px)"};
// `;

// const P3 = styled.p`
/* font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : interRegular}; */
//   font-size: ${({ fontSize }) =>
//     fontSize ? fontSize : "clamp(12px, .7vw, 14px)"};
// `;

const H1 = styled.h1`
  font-family: "Lato", sans-serif;
  letter-spacing: 1.5px !important;
  color: #000;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : "clamp(25px, 2.2vw, 40px)"};
`;
const H2 = styled.h2`
  font-family: "Lato", sans-serif;
  letter-spacing: 1.5px !important;
  color: #000;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : "clamp(20px, 2.1vw, 26px)"};
    font-weight: 700;
`;
const H3 = styled.h3`
  font-family: "Lato", sans-serif;
  letter-spacing: 1.5px !important;
  color: #000;
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize : "clamp(16px, 2vw, 18px)"};
`;
export { H1, H2, H3, P1 };
