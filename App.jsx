import React from 'react';
import {Typography,AppBar,Button,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
const cards=[1,2,3,4,5,6]
const App =() => {
    const classes=useStyles();
    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon}/>
                        <Typography variant="h6">
                            Photo Album
                        </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            I am Mosharaf Karim
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            This Typography to use for text and all Styles
                        </Typography>
                        <div  className={classes.button}>
                            <Grid container spacing={2} jusify="center">
                                <Grid item>
                                    <Button variant="contained"  color="primary">
                                        Contained Button
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Outlined Button
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                    {cards.map((card)=>(
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        You can use this section to describe content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">View</Button>
                                    <Button size="small" color="primary">Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
                <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterButtom>
                        footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" >
                        Something Here to give footer for purpose...
                </Typography>
            </footer>
        </>
    );
}
export default App;