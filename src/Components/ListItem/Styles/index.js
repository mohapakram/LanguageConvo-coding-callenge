import styled from 'styled-components'

export const FavButton = styled.button`
 width: 100%; 
 ${(props) => props.isFav ? `
  background-color: #ff784e;
` : `
  background-color: white;
`}
 border: 1px solid blue;
 margin: 0 10px;
 border-radius: 5px;
`

export const ListItemContainer = styled.div` 
 width: 100%;
 display: flex;
 justify-content: space-between;
 background-color: #673ab7;
 ${({ showButton, isFav }) => !showButton && `
    ${isFav ? `background-color: #ff784e;` : `background-color: #673ab7;`}
 `}}
 color: white;
 padding: 10px;

 > div {
     display: flex;

     > span {
        border-radius: 100%;
        border: 1px solid grey;
        padding: 5px;
     }
 }
`