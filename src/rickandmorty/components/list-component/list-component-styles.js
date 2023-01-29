import {css} from 'lit';

export const ListComponentStyles = css`
      h1,
      p{
        color: white;
        margin: 0;
      }
      p{
        font-weight: 100;
      }
      .get-api-btn{
          background-color: var(--text-primary-color);
          text-decoration: none;
          color: white;
          border-radius: .4rem;
          padding: .8rem;
          text-align: center;
          width: fit-content;
          transition: all .3s;
          cursor: pointer;
          display: inline-block;
      }
      .get-api-btn:hover{
          opacity: 0.8
      }
      .start {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: #15264b;
          display: grid;
          place-items: center;
          z-index: 99;
          transition: all .4s;
          overflow: hidden;
          text-align: center;
      }
      .start img{
        width: 500px;
        height: auto;
      }
      `;
