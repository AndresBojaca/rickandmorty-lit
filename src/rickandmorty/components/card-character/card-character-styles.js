import {css} from 'lit';

export const CharacterStyles = css`

          .card__container::-webkit-scrollbar {
            width: 5px;
          }
          .card__container::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.1);
          }
          .card__container::-webkit-scrollbar-thumb {
            background: #888;
          }
          .card__container::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          .card__container {
            display: grid;
            gap: 2rem;
            text-align: center;
          }
          .card{
            cursor: pointer;
            display: flex;
            flex-direction: row-reverse;
            transition: all .3s;
            position: relative;
            animation-name: fadeIn;
            animation-duration: .5s;
          }
          .card:hover{
            transform: scale(1.03);
            box-shadow: rgb(0 0 0 / 15%) 0px 15px 20px;
          }
          .card span {
            color: white;
            font-weight: 100;
            display: flex;
            align-items: center;
            font-size: .8rem;
          }
          span.card__name{
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-primary-color);
            margin: 0;
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
          .card__id{
            font-weight: 100;
            font-size: 9px;
            color: white;
            margin: 0;
            background-color: rgba(0,0,0,.3);
            border-radius: 3rem;
            padding: .2rem;
            position: absolute;
            top: .5rem;
            right: .5rem;
          }
          .nodata-text{
            color: var(--text-primary-color);
            width: 100%;
          }
          [data-status="Alive"],
          [data-status="Dead"],
          [data-status="unknown"]{
            height: 20px;
          }
          [data-status="Dead"]::after {
              content: "•";
              font-size: 2.5rem;
              display: block;
              color: red;
          }
          [data-status="Alive"]::after {
              content: "•";
              font-size: 2.5rem;
              display: block;
              color: #01ff00;
              margin-bottom: 2px;
          }
          [data-status="unknown"]::after {
              content: "•";
              font-size: 2.5rem;
              display: block;
              color: yellow;
          }

          @media (min-width: 576px) {
            .card__container{
              grid-template-columns: 1fr;
            }
          }
          
          @media (min-width: 992px) {
            .card__container{
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1200px) {
            .card__container{
              grid-template-columns: repeat(3, 1fr);
            }
          }
          
          @keyframes fadeIn {
            0%{
              opacity: 0;
              transform: scale(0.8);
            }
            100%{
              opacity: 1;
              transform: scale(1);
            }
          }
          `;
