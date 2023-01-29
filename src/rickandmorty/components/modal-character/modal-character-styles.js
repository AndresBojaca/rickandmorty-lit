import {css} from 'lit';

export const ModalStyles = css`
    .modal {
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        place-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        color: white;
        left: 0px;
        backdrop-filter: blur(8px);
        top: 0px;
        z-index: 999;

    }
    .modal__dialog{
        width: 100%;
        max-width: fit-content;
        height: auto;
        background-color: var(--bg-primary-color);
        padding: 2rem 0;
        position: relative;
        animation: fadeIn .3s ease-in;
        border-radius: 1rem;
    }
    .modal__dialog::before {
        content: "";
        width: 100%;
        height: 10px;
        border-radius: 1rem 1rem 0 0;
        position: absolute;
        background-color: var(--text-primary-color);
        top: 0px;
        left: 0;
    }
    span.card__name{
        font-size: 2rem;
        color: var(--text-primary-color);
    }
    span.card__name p{
        margin: 0;
    }
    .card__image{
        border-radius: 1rem;
        width: 100%;
    }
    .card__id{
        font-size: 1.2rem;
        margin: 0;
        color: #ffffff36;
    }
    .modal__header {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0 2rem 2rem 2rem;
        align-items: center;
    }
    .modal__content {
        display: flex;
        gap: 2rem;
        margin: 2rem;
    }
    .modal__footer{
        border-top: 1px solid rgba(255,255,255,.1);
        padding: 1rem 2rem;
        margin-top: 1rem;
    }
    .card__info{
        display: flex;
        flex-direction: column;
        width: 20rem;
    }
    .card__info span{
        position: relative;
    }
    .close-btn{
        cursor: pointer;
        background-color: var(--text-primary-color);
        color: var(--bg-primary-color);
        border-radius: .2rem;
        padding: .5rem 1rem;
        float: right;
        display: inline-block;
    }
    .modal__dialog span[data-status="Dead"],
    .modal__dialog span[data-status="Alive"],
    .modal__dialog span[data-status="unknown"]{
        margin-left: 1rem;
    }
    .modal__dialog [data-status="Dead"]::after {
        content: "•";
        font-size: 2.5rem;
        display: block;
        position: absolute;
        color: red;
        top: -18px;
        left: -18px;
    }
    .modal__dialog [data-status="Alive"]::after {
        content: "•";
        font-size: 2.5rem;
        display: block;
        position: absolute;
        color: #01ff00;
        top: -18px;
        left: -18px;
    }
    .modal__dialog [data-status="unknown"]::after {
        content: "•";
        font-size: 2.5rem;
        display: block;
        position: absolute;
        top: -18px;
        left: -18px;
        color: yellow;
    }

    @media (max-width: 768px) {
        .card__info {
            width: auto;
            justify-content: center;
            align-items: center;
        }

        .modal__content div{
            width: 50%;
        }
    }

    @media (max-width: 576px) {
        .modal__content {
            flex-direction: column;
            overflow-y: scroll;
            height: 320px;
            padding-right: 1rem;
        }

        .modal__content::-webkit-scrollbar {
            width: 5px;
        }
      .modal__content::-webkit-scrollbar-track {
            background: #00000032;
        }
      .modal__content::-webkit-scrollbar-thumb {
            background: #888;
        }
      .modal__content::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        .modal__dialog {
            margin: 1.5rem;
        }
        .modal__content div{
            width: 100%;
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
