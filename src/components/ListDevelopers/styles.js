import styled from 'styled-components';

export const Container = styled.div`
  width: 22%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 90%;
  border-radius: 5px;
  overflow: auto;
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    height: 80vh;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #ccc;
      justify-content: space-between;
      background: rgb(255, 255, 255);
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        margin: 4px;
        &.name {
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }
        img {
          margin: 8px;
          height: 56px;
          width: 56px;
          border-radius: 50%;
        }
        &.actions {
          align-items: flex-start;
          justify-content: center;
          button,
          a {
            margin-right: 12px;
            background-color: transparent;
            border: none;
            color: black;
            cursor: pointer;
            i {
              font-size: 1.2em;
            }
            i.fa-times-circle {
              color: red;
            }
          }
        }
      }
    }
  }
`;
