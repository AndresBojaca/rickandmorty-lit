import {css} from 'lit';

export const buttonStyles = css`
      .filter-container{
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
      }
      label{
        color: var(--text-primary-color);
        margin-bottom: 1rem;
      }
      input{
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 1px solid var(--text-primary-color);
        background-color: #1a2949;
        padding: 1rem;
        font-family: 'Poppins', sans-serif;
        color: white;
        width: 100%
      }
      input:focus,
      input:focus-visible{
        outline: none;
      }
      .card__container{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
      }
      .card{
        cursor: pointer;
        display: flex;
        flex-direction: row-reverse;
        transition: all .3s;
        position: relative;
      }
      .card:hover{
        box-shadow: rgb(0 0 0 / 15%) 0px 15px 20px;
      }
      .card h1{
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--text-primary-color);
        margin: 0;
      }
      .card span {
          color: white;
          font-weight: 100;
          display: flex;
          align-items: center;
      }
      .card__info {
        text-align: left;
        flex: 3 1 0%;
        background-color: #1a2949;
        padding: 1rem;
        border-radius: 0 .4rem .4rem .4rem;
        z-index: 9;
      }
      .card-image{
        flex: 2 1 0%;
      }
      .card-image img{
        border-radius: .4rem 0 0 .4rem;
        width: 100%;
        height: 100%;
      }
      [data-status="Alive"],
      [data-status="Dead"],
      [data-status="unknown"]{
        height: 20px;
      }
      [data-status="Dead"]::before {
          content: "•";
          font-size: 2.5rem;
          display: block;
          color: red;
      }
      [data-status="Alive"]::before {
          content: "•";
          font-size: 2.5rem;
          display: block;
          color: green;
      }
      [data-status="unknown"]::before {
          content: "•";
          font-size: 2.5rem;
          display: block;
          color: yellow;
      }
      .filter-container .input-btn-container{
          display: flex;
          gap: .7rem;
      }
      .get-api-btn{
          background-color: var(--text-primary-color);
          text-decoration: none;
          color: var(--bg-primary-color);
          padding: .8rem;
          text-align: center;
          width: 85px;
          transition: all .3s;
      }
      .get-api-btn:hover{
          opacity: 0.8
      }
      @media (min-width: 768px) and (max-width: 1024px) {
        .card__container{
          grid-template-columns: 1fr;
        }
      }
      @media (min-width: 1024px) {
        .card__container{
          grid-template-columns: repeat(2, 1fr);
        }
      }
      `;
