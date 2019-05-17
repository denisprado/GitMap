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
      justify-content: flex-start;
      img {
        margin: 8px;
        height: 56px;
        width: 56px;
        border-radius: 50%;
      }
      div {
        margin: 4px;
        &.actions {
          flex-direction: columns;
          display: flex;
          
        }
        i {
          margin: 8px;
        }
        i.fa-times-circle {
          color: red;
        }
      }
    }
  }
`;
