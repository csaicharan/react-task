import styled from 'styled-components';

export const ResultsContainer = styled.div`
  padding: var(--page-padding);
`;

export const ResultRow = styled.div`
  padding: var(--page-padding);
  border: 1px solid gray;
  border-bottom-width: 0;
  &:last-child{
    border-bottom-width: 1px;
  }
`;

export const H1 = styled.h1`
  margin: 0 0 var(--page-padding) 0;
`;

export const P = styled.p`
  margin: 0 var(--page-padding) 0 0;
}`;

export const FormContainer = styled.div`
  padding: var(--page-padding);
`;
