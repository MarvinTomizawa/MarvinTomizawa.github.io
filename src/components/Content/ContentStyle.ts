import styled from 'styled-components'
import { getTheme } from '../Ui/Variables';

export const ContentWrapper = styled.main`
    padding: 1rem;
    padding-bottom: 6rem;
    width: 100%;
    @media(min-width: ${({theme}) => getTheme(theme).mobileBreakingPoint} ){
        height: 85%;
        padding-bottom: 2rem;
    }
`;