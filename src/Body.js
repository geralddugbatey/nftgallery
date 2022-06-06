import styled from 'styled-components'


export const Body = styled.body`

display:grid;
grid-template-columns:[container-start] 1fr [center-start] repeat(10,[col-start] minmax(min-content,8rem) [col-end]
) [center-end] 1fr [container-end];

background:black;
min-height:100vh;
`
