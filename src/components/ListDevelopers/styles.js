import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  border: 1px solid #999;
  border-radius: 5px;
  margin: 48px;
  position: absolute;
  top: 0;
  left: 0;
  ul {
    background-color: white;
    width: 100%;
    list-style: none;
    padding: 0;
    height: 80vh;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid #999;
      justify-content: space-between;
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
