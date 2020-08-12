import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  border-left: 1px solid var(--color-background-shadow-dark);
  border-right: 1px solid var(--color-background-shadow-dark);
  position: relative;
`;

export const HeadProfile = styled.div`
  width: 100%;
  height: 53px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1.8rem;
  border-bottom: 1px solid var(--color-background-shadow-dark);
  position: fixed;
  background: #FFF;

  svg {
    color: var(--color-primary);
    margin-right: 2rem;
  }
  h1 {
    font-size: 1.8rem;

    span {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-text-secondary);
    }
  }
`;

export const FeedProfile = styled.div`
  width: 100%;
  margin-top: 53px;

  .cover {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const InfoProfile = styled.div`
  width: 100%;
  padding: 0 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -12%;


  .infos {
    width: 100%;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
      max-width: 134px;
      border-radius: 50%;
      margin-bottom: 0.6rem;
    }
    span {
      font-size: 1.6rem;
      color: var(--color-text-secondary);

      & + span {
        margin-top: 1rem;
      }

      strong {
        color: var(--color-text-primary);
        margin-right: 5px;

        & + strong {
          margin-left: 15px;
        }
      }
    }
  }

  button {
    width: 160px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.5rem;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background: var(--color-background-light);
    transition: .3s;

    &:hover {
      background: var(--color-background-hover);
    }
  }
`;

export const InfoNavigations = styled.ul`
  width: 100%;
  margin-top: 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid var(--color-background-shadow-dark);

  li {
    width: 25%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-text-secondary);
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    transition: .3s;
    
    &:hover {
      background: var(--color-background-hover);
      color: var(--color-primary);
      cursor: pointer;
    }
  }
`;

export const DontTweet = styled.div`
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
    width: 110px;
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