import React,{Component} from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';

import Detalhes from './Detalhes';


class Lista extends Component{

    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };


    render(){
        return(
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                        <TableHeaderColumn>Opções</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                        <TableRowColumn>
                            <Detalhes />
                        </TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        );
    }
}

export default Lista;