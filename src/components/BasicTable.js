import React, { useState, useEffect } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export const createCol = (col, name, text) => {
    return { col, name, text };
}

export const createRow = (category, command, item, lower, upper, value ) => {
    return { category, command, item, lower, upper,  value };
}

export const BasicTable = (props) => {
    const cols = [ 
        createCol(1, 'category', 'Category'),
        createCol(2, 'command', 'Command'),
        createCol(3, 'item', 'Item'),
        createCol(4, 'lower', 'Lower'),
        createCol(5, 'upper', 'Upper'),
        createCol(6, 'value', 'Value'),
    ];

    const rows = [
        createRow('Measure Voltage', 'CmdPkgVoltage', 'ID Voltage', 2240, 2280, 2250),
        createRow('Measure Voltage', 'CmdPkgVoltage', 'NTC Voltage', 8145, 10500, 9200),
        createRow('Set BatteryCore', 'CmdVoltage', 'V1', null, null, 3900),
        createRow('Set BatteryCore', 'CmdVoltage', 'V2', null, null, 3900),
        createRow('Set BatteryCore', 'CmdVoltage', 'OV1', null, null, 4230),
        createRow('Set BatteryCore', 'CmdVoltage', 'OV2', null, null, 4300),
    ];

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            { 
                                cols.map((col) => (
                                    <TableCell>{col.text}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows.map((curr, index, arr) =>  
                            { 
                                return(
                                <TableRow key={'row_'+index}>
                                    {
                                        cols.map((col, i) => {
                                            return (<TableCell key={index + ',' + i}>{curr[col.name]}</TableCell>);
                                        })
                                    }
                                </TableRow>); 
                            }
                            
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}