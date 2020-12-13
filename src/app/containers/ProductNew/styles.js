import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  p {
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const ContainerTitle = styled.div`
  width: 58%;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .card-input {
    width: 60%;
    height: 100vh;
    /* background: red; */
    .row-1 {
      .name-title input {
        width: 97%;
        height: 30px;
        padding: 10px, 0;
        border: none;
        border: 1px solid #999;
        margin-bottom: 20px;
        padding-left: 5px;
        border-radius: 5px;
      }

      .text-areas {
        .short-description textarea {
          height: 80px;
          width: 95%;
          border: 1px solid #999;
          margin: 5px 0 20px 0;
          padding: 10px;
          border-radius: 5px;
        }
        .long-description textarea {
          height: 160px;
          width: 95%;
          border: 1px solid #999;
          margin: 5px 0 20px 0;
          padding: 10px;
          border-radius: 5px;
        }
      }
      .price-stock {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 50%;

        /* background: red; */
        height: 100%;

        .item {
          display: flex;
          align-items: center;
          p {
            margin-right: 10px;
            /* height: 30px;    */
          }

          margin-right: 10px;
          input {
            width: 100px;
            height: 30px;
            padding-left: 5px;
            font-size: 14px;
          }
        }

        margin-bottom: 20px;
      }

      .dimensions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 50%;
        /* background: red; */
        height: 100%;

        .item {
          display: flex;
          align-items: center;

          p {
            margin-right: 10px;
            /* height: 30px;    */
          }

          margin-right: 10px;
          input {
            width: 100px;
            height: 30px;
            padding-left: 5px;
            font-size: 14px;
          }
        }

        margin-bottom: 20px;
      }
    }

    .btn {
      /* position: fixed;
      bottom: 0; */
      height: 50px;
      /* left: 603px; */
      /* right: 0; */
      /* text-align: center; */
      color: rgb(255, 255, 255);
      /* margin-right: 15px; */

      button {
        width: 40%;
        background: #81b71a;
        color: #fff;
        font-size: 16px;
        border-radius: 3px;
        margin-top: 15px;
        height: 35px;
        border: none;
        font-weight: bold;
        /* opacity: 0.9; */
      }
    }
  }

  .boxOptions {
    /* background: red; */
    display: flex;
    align-items: center;
    /* justify-content: space-around; */

    height: 50px;
    margin-bottom: 30px;

    .box {
      .options select {
        width: 200px;
        height: 35px;
        margin-right: 20px;
      }
    }
  }

  .images {
    display: flex;
    align-items: center;
    /* justify-content: center; */

    label#image {
      margin-right: 10px;
      border: 1px solid #999;
      background-size: cover;
      cursor: pointer;
      height: 160px;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
    }

    label#image input {
      display: none;
    }

    label#image.has-image {
      border: 0;
    }

    label#image.has-image img {
      display: none;
    }
  }
`;
