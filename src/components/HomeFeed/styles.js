import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid var(--color-background-shadow-dark);
  border-right: 1px solid var(--color-background-shadow-dark);
  position: relative;
`;

export const HeadHome = styled.div`
  width: 100%;
  height: 53px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.8rem;
  border-bottom: 1px solid var(--color-background-shadow-dark);
  position: fixed;
  
  svg {
    z-index: 10;
  }
`;

export const PublicTwitter = styled.div`
  width: 100%;
  margin-top: calc(60px + 5px);
  padding: 1.4rem 1.8rem;
  border-bottom: 10px solid var(--color-background-shadow-dark);

  .post {
    width: 100%;
    display: flex;
    align-items: center;

    textarea {
      width: 100%;
      margin-top: 20px;
      background: transparent;
      resize: none;
      color: var(--color-text-primary);
      font-size: 2rem;

      &::placeholder {
        color: var(--color-text-secondary);
        font-size: 2rem;
      }
    }
    img {
      width: 100%;
      max-width: 49px;
      border-radius: 50%;
      margin-right: 1.4rem;
    }
  }
  .actions {
    width: 100%;
    margin-top: 1.8rem;
    padding: 0 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      margin-left: 4.9rem;

      li {
        font-size: 1.4rem;

        & + li {
          margin-left: 10px;
        }
      }
    }

    button {
      width: 85px;
      height: 40px;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 1.6rem;

      transition: .3s;

      &:hover {
        background: var(--color-primary-dark);
      }
    }
  }
`;

export const WelcomeTo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3.6rem 2.8rem;

  h1 {
    margin-bottom: 1.4rem;
  }

  legend {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    color: var(--color-text-secondary);
    font-weight: 400;
    margin-bottom: 1.8rem;
  }

  button {
    width: 91px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.4rem;
    transition: .3s;

    &:hover {
      background: var(--color-primary-dark);
    }
  }
`;
