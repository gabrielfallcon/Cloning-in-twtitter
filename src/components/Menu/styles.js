import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 275px;
  margin-top: 2rem;

  img {
    width: 100%;
    max-width: 30px;
    margin-left: 2.4rem;
    margin-bottom: 2.4rem;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  width: 100%;

  li {
    width: max-content;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 2.4rem;
    border-radius: 40px;
    cursor: pointer;
    background: transparent;
    font-size: 1.8rem;
    color: var(--color-text-primary);
    font-weight: bold;
    transition: .2s;

    & + li {
      margin-top: 2rem;
    }

    &:hover{
      background: var(--color-background-hover);
      color: var(--color-primary);
    }

    svg {
      margin-right: 1.8rem;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 247px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.6rem; 
  border-radius: 40px;
  margin-top: 2.4rem;
  transition: .3s;

  &:hover {
    background: var(--color-primary-dark);
  }
`;
