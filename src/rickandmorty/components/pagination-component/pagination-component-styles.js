import {css} from 'lit';

export const PaginationStyles = css`
.pagination a {
  color: var(--text-primary-color);
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  background-color: rgb(26, 41, 73);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .2rem;
  animation: fadeIn .4s ease-in;
}
.pagination a.active{
  background-color: var(--text-primary-color);
  color: var(--bg-primary-color)
}
.pagination a:nth-child(1) {
  rotate: 180deg
}
.pagination {
  display: flex;
  gap: 5px;
  list-style: none;
  padding: 0px;
  margin: 2rem 0;
  justify-content: center;
}
.pagination__pages{
  display: flex;
  gap: 10px;
}
.pagination__pages--container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}

  @media(max-width: 768px){
    .pagination{
    } 
  }
  @keyframes fadeIn {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }`;
