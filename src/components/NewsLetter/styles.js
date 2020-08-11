import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
`;

export const InputSearch = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background: var(--color-background-shadow-dark);
  color: var(--color-text-secondary);

  &:focus-within  {
    background: var(--color-background-light);
    border: 1px solid var(--color-primary);

    svg {
      color: var(--color-primary);
    }
  }

  svg {
    margin-right: 2rem;
  }
  input {
    flex: 1;
    height: 100%;
    background: transparent;
    font-size: 1.5rem;
  
  }
`;

export const ListNews = styled.div`
  width: 100%;
  background: var(--color-background-shadow-light);
  padding-top: 1rem 0;
  list-style: none;
  border-radius: 20px;
  margin-top: 2.6rem;

  .more-news {
    padding: 1.4rem 2.4rem;
    font-size: 1.6rem;
    color: var(--color-primary);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  li {
    & + li {
      cursor: pointer;

      &:hover {
        background: var(--color-background-shadow-dark);
      }
    }

    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 1.4rem 2.4rem;

    span {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-text-secondary);
      margin-bottom: 0.6rem;
    }
    strong {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 800;
      color: var(--color-text-primary);
      margin-bottom: 0.6rem;
    }
    legend {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--color-text-secondary);

      span {
        color: var(--color-primary);
      }
    }
  }
`;

export const ListSujest = styled.ul`
  width: 100%;
  background: var(--color-background-shadow-light);
  padding-top: 1rem 0;
  list-style: none;
  border-radius: 20px;
  margin-top: 2.6rem;

  .more-follow {
    padding: 1.4rem 2.4rem;
    font-size: 1.6rem;
    color: var(--color-primary);
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  li {
    & + li {
      cursor: pointer;

      &:hover {
        background: var(--color-background-shadow-dark);
      }
    }

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: start;
    padding: 1.4rem 2.4rem;

    .profile {
      h2 {
        span {
          line-height: 2.6rem;
          color: var(--color-text-secondary);
          font-weight: 400;
        }
      }
    }
    button {
      width: 80.3px;
      height: 32px;
      border: 1px solid var(--color-primary);
      background: transparent;
      color: var(--color-primary);
      border-radius: 20px;
      font-weight: 600;
      font-size: 1.4rem;

      &:hover {
        background: var(--color-background-hover);
      }
    }
  }
`;

export const UsagePolicy = styled.div`
  width: 100%;
  margin-top: 1.4rem;

  .terms {
    display: flex;
    align-items: center;

    a {

      & + a {
        margin-left: 1.4rem;
      }
      &:hover{
        text-decoration: underline;
        text-decoration-color: var(--color-text-primary);
      }

      text-decoration: none;
      color: var(--color-text-secondary);
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
  .informations-announcement {
    display: flex;
    align-items: center;

    a {

      & + a {
        margin-left: 1.4rem;
      }
      &:hover{
        text-decoration: underline;
        text-decoration-color: var(--color-text-primary);
      }

      text-decoration: none;
      color: var(--color-text-secondary);
      font-size: 1.4rem;
      font-weight: 400;
      margin-top: 0.6rem;
    }
  }

  p {
    color: var(--color-text-secondary);
    font-size: 1.4rem;
    font-weight: 400;
    margin-top: 0.6rem;
  }
`;