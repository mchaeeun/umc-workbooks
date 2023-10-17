import styled from "styled-components";

export const MovieDetailWrapper = styled.div`
position: absolute;
    top: 0;
    left: 0;
    color: white;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: small;
    opacity: 0;

    &:hover {
        opacity: 1; // hover 시의 스타일
      }

    `;

    export const MovieDetailTitle = styled.span`
    font-weight: bold;
    display: block;
    margin: 15% 10% 15% 10%;
    `;

    export const MovieDetailOverview = styled.span`
    display: block;
    margin: 15% 10% 15% 10%;
    overflow: hidden; /* 텍스트 오버플로우 숨김 */
    text-overflow: ellipsis; /* 텍스트가 오버플로우 될 때 ...으로 표시 */
    `;

    export default MovieDetailWrapper;