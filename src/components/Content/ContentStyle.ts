import styled from 'styled-components'
import { getPalette } from '../Ui/Variables';

export const ContentWrapper = styled.main`
    padding: 1rem;
    width: 100%;
    @media(min-width: ${({theme}) => getPalette(theme).mobileBreakingPoint} ){
        height: 85%;
    }
`;