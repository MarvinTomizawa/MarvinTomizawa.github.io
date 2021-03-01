import styled from "styled-components";

interface IconProps {
  url?: string;
  size?: number;
}

export const Icon = styled.div.attrs<IconProps>(props => ({
  url: props.url || "https://image.flaticon.com/icons/png/512/65/65000.png",
  size: props.size || "115"
}))<IconProps>`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-image: url(${props => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props => props.size}%;
`;
