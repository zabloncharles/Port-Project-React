import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Caption2, SmallText } from "../styles/TextStyles";

export default function BigEpisodeButton(props) {
  const { image, title, subtitle } = props;
  return (
    <Link to="/page-2">
      <Wrapper>
        <ContentWrapper>
          <ImageWrapper>
            <Icon
              src={image || "/images/Illustrations/illustration 9.png"}
              className="icon"
            />
          </ImageWrapper>

          <TextWrapper>
            <Title>{title || "Family Guy"}</Title>
            <Subtitle>{subtitle || "Season 18 - Episode 2"}</Subtitle>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </Link>
  );
}
const ImageWrapper = styled.div`
  height: 290px;
`;
const Wrapper = styled.div`
  width: 210px;
  height: 280px;
  border-radius: 20px;
  text-align: center;
  /* Inside auto layout */
 
`;

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`;

const Title = styled(Caption2)`
  color: white;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

const Subtitle = styled(SmallText)`
  color: rgba(255, 255, 255, 0.7);
  opacity: 0.7;
`;

const Icon = styled.img`
  width: 210px;
  height: 280px;
  border-radius: 12px;
`;

const ContentWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
