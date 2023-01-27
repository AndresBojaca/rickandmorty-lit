import {css} from 'lit';

export const FilterStyles = css`
      .filter-container{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-bottom: 2rem;
        animation: fadeIn .4s ease-in;
      }
      label{
        color: var(--text-primary-color);
        margin-bottom: 1rem;
      }
      input{
        border: none;
        border-radius: 0.4rem 0.4rem 0px 0px;
        border-bottom: 3px solid var(--text-primary-color);
        background-color: #1a2949;
        padding: 1.5rem;
        font-family: 'Poppins', sans-serif;
        color: white;
      }
      input:focus,
      input:focus-visible{
        outline: none;
      }
      @keyframes fadeIn {
        0%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }
      `;
