import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0px;
  color: white;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledTextBold = styled.div`
  font-weight: bold;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 10px;
`;

const StyledNormalText = styled.div`
  margin-bottom: 10px;
  font-family: "Spline Sans Mono", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  line-height: 1.5;
`;

const StyledRoundedImage = styled.div`
  width: 300px;
  height: 300px;
  background-image: url("https://qph.cf2.quoracdn.net/main-qimg-0c2f4f674f12955ae42d6196ed556e57-lq");
  background-color: #ccc;
  background-size: cover;
  border: aliceblue 2px solid;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const StyledTitleBold = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  border: 1px solid white;
  border-radius: 319px;
  padding: 19px 89px;
  border-radius: 50% 50%;
  margin-bottom: 10px;
  text-align: center;
  line-height: 1.2;
`;

const StyledBorderedText = styled.div`
  border: 1px solid #ededed;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 19px;
  width: 100%;
  text-align: end;
  overflow: visible;
`;

const RoundedImageComponent = () => {
  return (
    <StyledContainer>
      <StyledTextBold>CAN YOU FEEL THE LOVE</StyledTextBold>
      <StyledNormalText>
        I highly recommend this site to all students!! In my opinion, the fusion
        community is one of the best out there. The mentors are always helpful
        and dedicated, with good feedback and exercises for every problem you
        encounter
      </StyledNormalText>
      <StyledRoundedImage></StyledRoundedImage>
      <StyledTitleBold>This is a Bold Title</StyledTitleBold>
      <StyledNormalText>
        I highly recommend this site to all students!! In my opinion, the fusion
        community is one of the best out there. The mentors are always helpful
        and dedicated, with good feedback and exercises for every problem you
        encounter
      </StyledNormalText>
      <StyledBorderedText>
        
        This is Text in a Border
      </StyledBorderedText>
    </StyledContainer>
  );
};

export default RoundedImageComponent;