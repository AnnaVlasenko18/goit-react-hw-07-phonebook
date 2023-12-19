import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing(4)};
  gap: ${props => props.theme.spacing(4)};
  font-weight: 700;
  color: ${props => props.theme.colors.color};
`;

export const Container = styled.div`
  border: 2px solid ${props => props.theme.colors.backgroundBorder};
  border-radius: ${props => props.theme.radii.sm};
  width: 500px;
  padding: ${props => props.theme.spacing(4)};
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};
`;

export const TitleContact = styled.h2`
  margin-bottom: ${props => props.theme.spacing(5)};
`;
