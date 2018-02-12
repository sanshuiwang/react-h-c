import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
class TableDemo extends Component {
  render() {
    return (<Table responsive bordered condensed>
      <tbody>
        <tr>
          <td style={{padding: '0px'}}>
            <Table bordered condensed style={{marginBottom: '0px'}}>
              <thead>
                <tr>
                  <th colSpan="2">NAME</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                </tr>
              </tbody>
            </Table>
          </td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>)
  }
}

export default TableDemo;
