import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from './';

/**
 * Unit test for Table Component.
 * First is for if data is empty
 * Second one is for data with object.
 */

describe('Table Component', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow();
  });

  it('should render no rows inside a Table component if items is an empty array', () => {
    const dataArray = [];

    const wrapper = shallow(<Table data={dataArray} />);
    const tableBody = wrapper.dive().find(TableBody);
    const tableRow = tableBody.find(TableRow);

    expect(tableRow).toHaveLength(dataArray.length);
  });

  it('should render 3 rows inside a Table component of each item of the data array and first Cell contains JS text', () => {
    const dataArray = [
      {
        id: 1,
        title: 'JS',
        description:
          'JavaScript - is an interpreted programming language that conforms to the ECMAScript specification.',
      },
      {
        id: 2,
        title: 'Algorithms',
        description: 'Searching, Sorting, Graphs, Big O Notation, etc.',
      },
      {
        id: 3,
        title: 'React',
        description: 'React - A JavaScript library for building user interfaces',
      },
    ];

    const wrapper = shallow(<Table data={dataArray} />);
    const tableBody = wrapper.dive().find(TableBody);
    const tableRow = tableBody.find(TableRow);

    expect(tableRow).toHaveLength(dataArray.length);

    expect(
      tableRow
        .find(TableCell)
        .first()
        .text()
    ).toEqual('JS');
  });
});
