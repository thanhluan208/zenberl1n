import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { deleteReservation} from '../../actions/reservation'
import { CSVLink } from 'react-csv';
import { Link, useLocation } from 'react-router-dom'



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: '_id', numeric: false, disablePadding: false, label: 'Id' },
  { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
  { id: 'telNumber', numeric: false, disablePadding: false, label: 'Telephone Number' },
  { id: 'numberOfCustomer', numeric: false, disablePadding: false, label: 'Number Of Customer' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
  { id: 'time', numeric: false, disablePadding: false, label: 'Time' },
  { id: 'message', numeric: false, disablePadding: false, label: 'Message' },
  { id: 'delete', numeric: false, disablePadding: false, label: 'Delete' },
  
];

function EnhancedTableHead(props) {
  const { classes,  order, orderBy,  onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const Customer = () => {
  
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [customer, setCustomer] = useState([])
  
  const getCustomer = () => {
    axios.get('https://zen-berlin.herokuapp.com/reservation')
    .then((response) => {
      const myCustomer = response.data
      setCustomer(myCustomer)
    })
  }
  useEffect(() => getCustomer(), [])

  console.log(customer)

  const dispatch = useDispatch()
  const handleDeleteRow = (e,id) => {
    
    e.preventDefault()

    const deletedRow = document.getElementById(id)

    deletedRow.remove()

    console.log(id)

    dispatch(deleteReservation(id))
  }
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setrowsPerPage] = React.useState(10);

  


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = customer.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangerowsPerPage = (event) => {
    setrowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };


  const emptycustomer = rowsPerPage - Math.min(rowsPerPage, customer.length - page * rowsPerPage);
  if( user?.result.email !== "thanhluan20880@gmail.com") return(
    <>
      <div style={{width:"100%",height:"100vh",display:"flex",alignItems:"center"}}>
        <Typography variant="h1" align="center">PLEASE <Link to="/auth">Log In</Link> ADMIN ACOUNT TO CONTINUE</Typography>
      </div>
    </>
  )
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={customer.length}
            />
            <TableBody>
              {stableSort(customer, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                

                  return (
                    <TableRow hover id={row._id} tabIndex={-1} key={row._id} >
                      
                      <TableCell  align="left">{row?._id}</TableCell>
                      <TableCell  align="left">{row?.customer}</TableCell>
                      <TableCell  align="left">0{row?.telNumber}</TableCell>
                      <TableCell  align="left">{row?.numberOfCustomer}</TableCell>
                      <TableCell className="date MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" align="left">{row?.date?.substring(0,10)}</TableCell>
                      <TableCell classname="time MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft" align="left">{row?.time}</TableCell>
                      <TableCell  align="left">{row?.message}</TableCell>
                      <TableCell  align="left"><Button  onClick={(event)=>handleDeleteRow(event,row._id)} size="small" color="primary"><DeleteIcon fontSize="small" /> Delete</Button></TableCell>
                    </TableRow>
                  );
                })}
              {emptycustomer > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptycustomer }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10,25,50]}
          component="div"
          count={customer.length / 10 > 1 ? customer.length / 10 : 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onrowsPerPageChange={handleChangerowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
      <CSVLink style={{textDecoration:"none"}} data={customer}>Download me</CSVLink>
    </div>
  
  );
}

export default Customer