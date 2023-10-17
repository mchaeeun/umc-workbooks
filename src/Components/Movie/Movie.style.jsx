import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
`;

export const MovieImg = styled.img`
  max-width: 100%;
    height: auto;
    `;

export const MovieInfo = styled.div`
margin: 10%;
    color: white;
    font-size: small;
    display: grid;
    grid-template-columns: 4fr 1fr;
    `;

export const MovieTitle = styled.span`
display: flex;
    align-items: center;
    `;


    export const MovieVoteAverage = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    `;

export default MovieWrapper;