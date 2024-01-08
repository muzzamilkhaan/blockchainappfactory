import styled from "styled-components";

const UnderLine = styled.div`
  background-color: ${({ background }) =>
    background ? background : " #aca3a3"};
  width: 50px;
  margin: 10px auto 15px;
  height: ${({ height }) => (height ? height : " 2.5px")};
  /* height:  2.5px; */
  /* border-top: 1px solid #eee; */
`;
export default UnderLine;
