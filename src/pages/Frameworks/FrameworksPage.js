import React, { Component } from "react";
import InputField from '../../components/InputField/InputField';
import items from "../items";
import { FormContainer, H1, P, ResultRow, ResultsContainer as ResultGrid } from './Frameworks.styled';




const EmptyResultRow = () => {
  return <ResultRow>No Results found on the search</ResultRow>
}

const ResultText = (searchKey, text) => {
  const replaceStrRegEx = new RegExp(searchKey, 'g');
  return text.replace(replaceStrRegEx, `<strong>${searchKey}</strong>`);
}

const RenderResults = (items, searchText) => {
  let filteredItems = items;

  if (Boolean(searchText)) {
    filteredItems = items
      .filter(resultItem => {
        return resultItem.title.indexOf(searchText) !== -1 || resultItem.description.indexOf(searchText) !== -1;
      });
    filteredItems = filteredItems.map(item => {
      return {
        ...item,
        description: ResultText(searchText, item.description)
      }
    });
  }

  return filteredItems.length > 0 ? filteredItems.map((resultItem, index) => {
    return <ResultRow key={index}>
      <H1>{resultItem.title}</H1>
      <P dangerouslySetInnerHTML={{ __html: resultItem.description }} />
    </ResultRow>
  }) : <EmptyResultRow />;
}

class FrameworksPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }

  updateSearchText = (key, value) => {
    this.setState((prevState) => {
      return { ...prevState, searchText: value }
    })
  }

  render() {

    const { searchText } = { ...this.state };

    return <div>
      <FormContainer>
        <InputField name="searchText" value={searchText} onChange={this.updateSearchText} />
        <P><strong>Note :</strong> The search is case-sensitive.</P>
      </FormContainer>
      <ResultGrid>
        {RenderResults(items, searchText)}
      </ResultGrid>
    </div>;
  }
}

export default FrameworksPage;